import {Controller, Post, Body} from '@nestjs/common'
import {productService} from './product.service'
@Controller ('product')
export class productController{
    constructor(private readonly productService: productService) {}
    @Post()
    addProduct(
       @Body('title') prodTitle : string,
       @Body('description') prodDesc : string,
       @Body('price') price : number
    ):any{
        const generatedId = this.productService.insertProduct(
            prodTitle,
            prodDesc,
            price
        );
        return { id : generatedId}
    }
}