import { Module } from '@nestjs/common';
import { CampgroundService } from './campground.service';
import { CampgroundController } from './campground.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campground } from 'src/entities/campground.entity';
import { Review } from 'src/entities/review.entity';
import { CloundinaryModule } from './cloundinary/cloundinary.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Campground, Review]),
    MulterModule.register({}),
    CloundinaryModule,
  ],
  controllers: [CampgroundController],
  providers: [CampgroundService],
})
export class CampgroundModule {}
