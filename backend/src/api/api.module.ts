import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LogMiddleware } from 'src/common/log.middleware';
import { AuthModule } from './auth/auth.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CampgroundModule } from './campground/campground.module';

@Module({
  imports: [AuthModule, ReviewsModule, CampgroundModule],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('api');
  }
}
