import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
const express = require ('express')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.use('/uploads', express.static(join(__dirname, '..', 'uploads'))); // <-
  await app.listen(3000);
}
bootstrap();
