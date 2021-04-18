import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Repository } from 'typeorm';
import { Review } from 'src/entities/review.entity';
import { ReviewEvent } from 'src/common/event/review.event';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async createReview(author: string, createDto: CreateReviewDto) {
    const review = await this.reviewRepo
      .create({ author, ...createDto })
      .save();
    this.eventEmitter.emit(
      'review',
      new ReviewEvent('create', {
        campground: review.campground,
        rating: review.rating,
      }),
    );
    return review;
  }

  async updateCampReview(
    user: string,
    id: string,
    updateReviewDto: UpdateReviewDto,
  ) {
    const isUpdated = await this.reviewRepo
      .update({ id, author: user }, updateReviewDto)
      .then((res) => !!res.affected);
    if (isUpdated) {
      if (updateReviewDto.rating !== undefined) {
        this.eventEmitter.emit(
          'review',
          new ReviewEvent('update', {
            campground: updateReviewDto.campground,
            rating: updateReviewDto.rating,
          }),
        );
      }
      return isUpdated;
    }
    throw new BadRequestException(
      `Either review is not existed or current user is not the review creator.`,
    );
  }

  async deleteReview(user: string, id: string) {
    const review = await this.reviewRepo.findOne({ id, author: user });
    if (!review) {
      throw new UnauthorizedException(`Current user dosen't own review:${id}`);
    }
    const deleted = await this.reviewRepo
      .delete(id)
      .then((res) => !!res.affected);
    if (deleted) {
      this.eventEmitter.emit(
        'review',
        new ReviewEvent('delete', {
          campground: review.campground,
          rating: review.rating,
        }),
      );
    }
    return deleted;
  }
}
