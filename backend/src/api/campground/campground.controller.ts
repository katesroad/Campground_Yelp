import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { User } from 'src/common/decorators/user.decorator';
import { CampgroundService } from './campground.service';
import { CloudinaryService } from './cloundinary/cloudinary.service';
import { CreateCampgroundDto } from './dto/create-campground.dto';
import { UpdateCampgroundDto } from './dto/update-campground.dto';

@Controller('api/campgrounds')
export class CampgroundController {
  constructor(
    private readonly campgroundService: CampgroundService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  @UseInterceptors(FilesInterceptor('images')) // the form field name
  @Post('file')
  uploadFile(@UploadedFiles() files: Express.Multer.File[]) {
    return this.cloudinary.uploadImages(files);
  }

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
