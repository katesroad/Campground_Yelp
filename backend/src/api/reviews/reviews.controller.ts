import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { User } from 'src/common/decorators/user.decorator';
import { JwtAuthGuard } from 'src/common/auth';

@UseGuards(JwtAuthGuard)
@Controller('api/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  createReview(
    @User('id') author: string,
    @Body() createReviewDto: CreateReviewDto,
  ) {
    return this.reviewsService.createReview(author, createReviewDto);
  }

  @Patch(':id')
  updateCampReview(
    @User('id') user: string,
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewsService.updateCampReview(user, id, updateReviewDto);
  }

  @Delete(':id')
  deleteCampReview(@User('id') user: string, @Param('id') id: string) {
    return this.reviewsService.deleteReview(user, id);
  }
}
