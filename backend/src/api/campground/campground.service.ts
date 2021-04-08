import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campground } from 'src/entities/campground.entity';
import { Review } from 'src/entities/review.entity';
import { Repository } from 'typeorm';
import { CreateCampgroundDto } from './dto/create-campground.dto';
import { UpdateCampgroundDto } from './dto/update-campground.dto';

@Injectable()
export class CampgroundService {
  constructor(
    @InjectRepository(Campground)
    private readonly campRepo: Repository<Campground>,
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
  ) {}

  createCamp(createDto: CreateCampgroundDto) {
    return 'This action adds a new campground';
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
