import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from 'src/entities/review.entity';
import { Campground } from 'src/entities/campground.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Campground])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
