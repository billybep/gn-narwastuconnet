# Docker


## Database Setup 
🎯 Tujuan: Kita punya folder proyek, dan bisa menjalankan database (misalnya MySQL) lewat Docker, tanpa install manual di local machine.

Run container DB MySQL
```
docker compose up -d
```

##### Notes

How to check:
```
<!-- masuk ke docker-container | nama container | masuk ke db mysql -->
docker exec -it gn-db mysql -u root -p
# masukkan password: root
SHOW DATABASES;
```

Harusnya muncul database narwastu

## Backend NestJS di Docker
🎯 Tujuan: Punya backend NestJS yang berjalan di container terpisah, bisa connect ke MySQL container

Inisialisasi proyek NestJS
pada root directory
```
docker run --rm -v ${PWD}:/app -w /app node:20 npx @nestjs/cli new backend --package-manager npm
```

Install TypeORM + MySQL Driver
pada backend directory
```
docker run --rm -v ${PWD}:/app -w /app node:20 npm install @nestjs/typeorm typeorm mysql2
```

Konfigurasi koneksi database
edit : [backend] src/app.module.ts:
```
import { TypeOrmModule } from '@nestjs/typeorm';

// add this on imports
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
```

Jalankan seluruh stack
Kembali ke folder root gn-narwastuconnect
```
docker compose up -d --build
```

## Entity & API di NestJS
```
docker run --rm -v ${PWD}:/app -w /app node:20 npx nest g module users
docker run --rm -v ${PWD}:/app -w /app node:20 npx nest g controller users
docker run --rm -v ${PWD}:/app -w /app node:20 npx nest g service users
```


Menambahkan Validasi & Seed Data di NestJS 🚀
Di tahap ini kita akan:
Menambahkan validasi input dengan class-validator & class-transformer.
Membuat seed data (data awal otomatis masuk database saat start).
Memastikan API lebih aman dan rapi.

```
// Install Library Validasi
docker exec -it gn-backend npm install class-validator class-transformer

// Update DTO dengan Validasi
// Edit src/users/dto/create-user.dto.ts:

```