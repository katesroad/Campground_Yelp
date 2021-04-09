import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campground } from 'src/entities/campground.entity';
import { Review } from 'src/entities/review.entity';
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
    return `This action returns a #${id} campground`;
  }

  getCampReviews(id: string) {
    return `This is the review for campground#${id}`;
  }

  updateCampById(author: string, id: string, updateDto: UpdateCampgroundDto) {
    return `This action updates a #${id} campground`;
  }

  removeCampById(author: string, id: string) {
    return `This action removes a #${id} campground`;
  }
}
