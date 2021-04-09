import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class PgConf implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createTypeOrmOptions() {
    const conf = this.configService.get('db.pg');
    const isProd = process.env.NODE_ENV === 'production' ? true : false;
    const synchronize = isProd ? false : true;
    return {
      ...conf,
      type: 'postgres',
      synchronize,
      entities: ['dist/entities/*.entity.js'],
    };
  }
}
