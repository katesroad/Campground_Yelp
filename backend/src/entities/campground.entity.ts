import { Max, Min } from 'class-validator';
import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Review } from './review.entity';

class Image {
  url: string;
  filename: string;
}

class Point {}

class Geometry {
  type: Point;
  coordinates: number;
}

@Entity('campground')
export class Campground extends AbstractEntity {
  @Column('text')
  title: string;

  @Column({ type: 'json' })
  images: Image[];

  @Column({ type: 'json' })
  geometry: Geometry;

  @Max(1000)
  @Min(1)
  @Column()
  price: number;

  @Column('text')
  description: string;

  @Column('text')
  location: string;

  @Column()
  author: number;

  @OneToMany(() => Review, (review) => review.campground)
  reviews: number[];
}
