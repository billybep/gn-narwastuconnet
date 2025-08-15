import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

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
      entities: [User],     // Daftar entity yang akan digunakan
      synchronize: true,    // jangan di production
    }),

    /**
     *  Import module Here
     */
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
