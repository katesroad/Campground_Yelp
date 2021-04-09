import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from 'src/entities/review.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
  ) {}
  createReview(author: string, createDto: CreateReviewDto) {
    return this.reviewRepo.create({ author, ...createDto }).save();
  }

  async updateCampReview(
    user: string,
    id: string,
    updateReviewDto: UpdateReviewDto,
  ) {
    const review = await this.reviewRepo.findOne({ id, author: user });
    if (!review) {
      throw new UnauthorizedException(`Current user dosen't own review:${id}`);
    }
    return this.reviewRepo
      .update(id, updateReviewDto)
      .then(() => this.reviewRepo.findOne(id));
  }

  async deleteReview(user: string, id: string) {
    const review = await this.reviewRepo.findOne({ id, author: user });
    if (!review) {
      throw new UnauthorizedException(`Current user dosen't own review:${id}`);
    }
    return this.reviewRepo.delete(id).then(() => null);
  }
}
