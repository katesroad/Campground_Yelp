import { IsDefined, Max, Min } from 'class-validator';
import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Review } from './review.entity';

export class Image {
  public_id: string;
  url: string;
}

export class Geometry {
  type = 'Point';
  coordinates: number[];
  constructor(coordinates: number[]) {
    this.coordinates = coordinates;
  }
}

@Entity('campgrounds')
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

  @Column({ default: 0, nullable: true })
  rating: number;

  @Column({ default: 0 })
  reviewsNum: number;

  @Column('text')
  description: string;

  @Column('text')
  location: string;

  @Column()
  @IsDefined()
  author: string;

  @OneToMany(() => Review, (review) => review.campground, {
    cascade: ['remove'],
  })
  reviews: string[];
}
