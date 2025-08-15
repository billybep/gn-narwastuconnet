import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]) // Mendaftarkan repository User
  ],
  controllers: [
    UsersController // Controller API
  ],
  providers: [
    UsersService    // Service logic
  ]
})
export class UsersModule {}
