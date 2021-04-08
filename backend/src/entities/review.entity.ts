import { Max, Min } from 'class-validator';
import { Entity, Column, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Campground } from './campground.entity';

@Entity('reviews')
export class Review extends AbstractEntity {
  @Column('text')
  body: string;

  @Max(5)
  @Min(1)
  @Column()
  rating: number;

  @Column()
  author: number;

  @ManyToOne(() => Campground, (campground) => campground.reviews)
  campground: string;
}
