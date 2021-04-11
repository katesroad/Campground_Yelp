import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campground } from 'src/entities/campground.entity';
import { Review } from 'src/entities/review.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CloudinaryService } from './cloundinary/cloudinary.service';
import { CreateCampgroundDto } from './dto/create-campground.dto';
import { UpdateCampgroundDto } from './dto/update-campground.dto';
import { MapboxService } from './mapbox.service';

@Injectable()
export class CampgroundService {
  constructor(
    @InjectRepository(Campground)
    private readonly campRepo: Repository<Campground>,
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
    private readonly cloundinary: CloudinaryService,
    private readonly mapbox: MapboxService,
  ) {}

  async createCamp(
    author: string,
    createDto: CreateCampgroundDto,
    imageFiles: Express.Multer.File[],
  ) {
    const { location, ...data } = createDto;
    const [images, geometry] = await Promise.all([
      this.cloundinary.uploadImages(imageFiles),
      this.mapbox.getGeometry(location),
    ]);
    return this.campRepo
      .create({
        ...data,
        images,
        location,
        geometry,
        author,
      })
      .save();
  }

  getCamps() {
    return this.campRepo
      .findAndCount()
      .then((res) => ({ data: res[0], count: res[1] }));
  }

  getCampById(id: string) {
    return this.campRepo.findOne(id);
  }

  getCampsReviews(id: string) {
    return this.reviewRepo
      .findAndCount({ campground: id })
      .then(([records, count]) => {
        const reviews = records.map((record) => {
          const { author, ...data } = record;
          const { username, email, id } = (author as unknown) as User;
          return { ...data, author: { id, username, email } };
        });
        return { count, data: reviews };
      });
  }

  async updateCampById(
    author: string,
    id: string,
    updateDto: UpdateCampgroundDto,
  ) {
    const camp = await this.campRepo.findOne({ id, author });
    if (!camp) {
      throw new UnauthorizedException(
        `Current user does't own campground:#${id}`,
      );
    }
    return this.campRepo
      .update(id, updateDto)
      .then(() => this.campRepo.findOne(id));
  }

  async removeCampById(author: string, id: string) {
    const camp = await this.campRepo.findOne({ id, author });
    if (!camp) {
      throw new UnauthorizedException(
        `Current user does't own campground:#${id}`,
      );
    }
    await this.cloundinary.deleteImages(
      camp?.images?.map((img) => img.public_id),
    );
    return this.campRepo.delete(id);
  }
}
