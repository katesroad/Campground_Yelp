import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateCampgroundDto {
  @IsString()
  title: string;

  @IsPositive()
  @Min(1)
  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsString()
  geometry: string;
}
