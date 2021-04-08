import { Entity, Column, Index } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('users')
@Index(['email'], { unique: true })
export class User extends AbstractEntity {
  @Column('text')
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  token: string; // the refresh token
}
