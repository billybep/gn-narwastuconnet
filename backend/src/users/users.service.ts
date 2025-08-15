import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
    // Inject repository agar bisa akses query database
    @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    // Ambil semua user
    findAll() {
        return this.usersRepository.find();
    }

    // Tambah user baru
    create(userData: Partial<User>) {
        const user = this.usersRepository.create(userData); // Buat instance entity
        return this.usersRepository.save(user);             // Simpan ke database
    }
}
