import { HttpModule, Module } from '@nestjs/common';
import { CampgroundService } from './campground.service';
import { CampgroundController } from './campground.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campground } from 'src/entities/campground.entity';
import { Review } from 'src/entities/review.entity';
import { CloundinaryModule } from './cloundinary/cloundinary.module';
import { MapboxService } from './mapbox.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Campground, Review]),
    CloundinaryModule,
    HttpModule.register({}),
  ],
  controllers: [CampgroundController],
  providers: [CampgroundService, MapboxService],
})
export class CampgroundModule {}
