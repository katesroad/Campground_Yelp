import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ApiModule } from './api/api.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { PgConf } from './pg.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    EventEmitterModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PgConf,
    }),
    ApiModule,
    CommonModule,
  ],
})
export class AppModule {}
