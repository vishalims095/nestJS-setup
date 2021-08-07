import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {product} from './product.model'
import {Model} from 'mongoose'
@Injectable()
export class productService {
  private products : product[]=[]
  constructor(@InjectModel('product') private readonly productModel : Model<product>){}
  
  // insertProduct()
}
