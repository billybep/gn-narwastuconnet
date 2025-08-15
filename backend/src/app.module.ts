import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db', // pakai nama service di docker-compose
      port: 3306,
      username: 'narwastuuser',
      password: 'narwastupass',
      database: 'narwastu',
      autoLoadEntities: true,
      synchronize: true, // jangan di production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
