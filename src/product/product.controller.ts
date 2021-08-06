import {Controller, Post} from '@nestjs/common'
@Controller ('product')
export class productController{
    @Post()
    addProduct():any{
        console.log("==testing add product api==")
    }
}