import { Entity, Column, Index, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Review } from './review.entity';

@Entity('users')
@Index(['email'], { unique: true })
export class User extends AbstractEntity {
  @Column('text')
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  token: string; // the refresh token

  @OneToMany(() => Review, (review) => review.author)
  reviews: string[];
}
