import { IsNumber, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  body: string;

  @Max(5)
  @Min(0)
  @IsNumber()
  ratting: number;

  @IsUUID()
  campground: string;
}
