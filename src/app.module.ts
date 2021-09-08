import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import {productModule} from'./product/products.modules'
@Module({
  imports: [productModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestJs')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
