import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import {productModule} from'./product/products.modules'
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [productModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestJs'),
  MulterModule.registerAsync({
    useFactory: () => ({
      dest: './upload',
    }),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
