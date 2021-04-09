import { Transform } from 'class-transformer';
import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateCampgroundDto {
  @IsString()
  title: string;

  @Transform((price) => +price.value)
  @IsPositive()
  @Min(1)
  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  location: string;
}
