import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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
    const isUpdated = await this.reviewRepo
      .update({ id, author: user }, updateReviewDto)
      .then((res) => !!res.affected);
    if (isUpdated) {
      return this.reviewRepo.findOne({
        where: { id },
        select: ['author', 'id', 'title', 'body', 'updated_at', 'created_at'],
      });
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
    return this.reviewRepo.delete(id).then((res) => !!res.affected);
  }
}
