import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersService } from '../users/users.service';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const userService = appContext.get(UsersService);

  // Tambah user jika database masih kosong
  const users = await userService.findAll();
  if (users.length === 0) {
    await userService.create({ name: 'Admin', email: 'admin@example.com' });
    await userService.create({ name: 'User Satu', email: 'user1@example.com' });
    console.log('✅ Seed data berhasil ditambahkan');
  } else {
    console.log('ℹ️ Data sudah ada, skip seeding');
  }

  await appContext.close();
}
bootstrap();
