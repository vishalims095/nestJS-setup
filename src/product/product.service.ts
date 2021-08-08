import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {product} from './product.model'
import {Model} from 'mongoose'
@Injectable()
export class productService {
  private products : product[]=[]
  constructor(@InjectModel('product') private readonly productModel : Model<product>){}
  
  async insertProduct(title : string, desc : string, price : number){
    const productId = Math.random().toString()
    const newProduct = new this.productModel({title : title, description : desc, price : price})
    let saveData : any = await newProduct.save()
    return saveData
  }
  async getProduct(){
    let data = await this.productModel.find({})
    return data;
  }
}
