import { Module } from '@nestjs/common';
import {productController} from './product.controller'
import {productService} from './product.service'
import {MongooseModule} from '@nestjs/mongoose'
import {productSchema} from './product.model'
@Module({
    imports: [MongooseModule.forFeature([{name : 'product', schema : productSchema}])],
    controllers: [productController],
    providers: [productService],
  })
  export class productModule {}