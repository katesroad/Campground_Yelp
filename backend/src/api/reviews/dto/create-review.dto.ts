import { Transform } from 'class-transformer';
import { IsNumber, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @Transform((ratting) => +ratting.value)
  @Max(5)
  @Min(0)
  @IsNumber()
  ratting: number;

  @IsUUID()
  campground: string;
}
