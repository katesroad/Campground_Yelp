import { IsDefined, Max, Min } from 'class-validator';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Campground } from './campground.entity';
import { User } from './user.entity';

@Entity('reviews')
export class Review extends AbstractEntity {
  @Column('text')
  @IsDefined()
  title: string;

  @Column('text')
  @IsDefined()
  body: string;

  @Max(5)
  @Min(0)
  @Column('numeric')
  rating: number;

  @Column()
  @ManyToOne(() => User, (author: User) => author.id, { eager: true })
  @JoinColumn({ name: 'author' }) // setup the joined column name, without given name, the default value is campgroundId
  author: string;

  @ManyToOne(() => Campground, (campground) => campground.id)
  @JoinColumn({ name: 'campground' })
  camp: string;

  @Column({ nullable: true })
  campground: string;
}
