import { IsDefined, Max, Min } from 'class-validator';
import { Entity, Column, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Campground } from './campground.entity';
import { User } from './user.entity';

@Entity('reviews')
export class Review extends AbstractEntity {
  @Column('text')
  @IsDefined()
  body: string;

  @Max(5)
  @Min(1)
  @Column('numeric')
  ratting: number;

  @Column()
  @ManyToOne(() => User, (author: User) => author.id, { eager: true })
  author: string;

  @ManyToOne(() => Campground, (campground) => campground.id)
  campground: string;
}
