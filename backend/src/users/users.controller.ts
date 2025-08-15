import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users') // Prefix URL → /users
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // Endpoint GET /users → Ambil semua user
    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    // Endpoint POST /users → Tambah user baru
    @Post()
    create(@Body() body: Partial<User>): Promise<User> {
        return this.usersService.create(body);
    }
}
