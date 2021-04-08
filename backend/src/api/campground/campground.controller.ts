import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { User } from 'src/common/decorators/user.decorator';
import { CampgroundService } from './campground.service';
import { CreateCampgroundDto } from './dto/create-campground.dto';
import { UpdateCampgroundDto } from './dto/update-campground.dto';

@Controller('api/campgrounds')
export class CampgroundController {
  constructor(private readonly campgroundService: CampgroundService) {}

  @Post()
  createCamp(@Body() createDto: CreateCampgroundDto) {
    return this.campgroundService.createCamp(createDto);
  }

  @Get()
  getCamps() {
    return this.campgroundService.getCamps();
  }

  @Get(':id')
  getCampById(@Param('id') id: string) {
    return this.campgroundService.getCampById(id);
  }

  @Get(':id/reviews')
  getCampReviews(@Param('id') id: string) {
    return this.campgroundService.getCampReviews(id);
  }

  @Patch(':id')
  updateCampById(
    @User('id') author: string,
    @Param('id') campId: string,
    @Body() updateDto: UpdateCampgroundDto,
  ) {
    return this.campgroundService.updateCampById(author, campId, updateDto);
  }

  @Delete(':id')
  removeCampById(@User('id') author: string, @Param('id') id: string) {
    return this.campgroundService.removeCampById(author, id);
  }
}
