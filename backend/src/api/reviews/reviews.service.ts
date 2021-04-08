import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campground } from 'src/entities/campground.entity';
import { Review } from 'src/entities/review.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Campground)
    private readonly campRepo: Repository<Campground>,
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
  ) {}
  createReview(author: string, createDto: CreateReviewDto) {
    return 'This action adds a new review';
  }

  updateCampReview(user: string, id: string, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  deleteCampReview(user: string, id: string) {
    return `This action removes a #${id} review`;
  }
}
