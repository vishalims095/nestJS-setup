import {Controller, Post, Body, Get, Patch, Param} from '@nestjs/common'
import {productService} from './product.service'
@Controller ('product')
export class productController{
    constructor(private readonly productService: productService) {}
    @Post()
    public async addProduct(
       @Body('title') prodTitle : string,
       @Body('description') prodDesc : string,
       @Body('price') price : number
    ): Promise<any> {
        const generatedId = await this.productService.insertProduct(
            prodTitle,
            prodDesc,
            price
        );
        return { message : "Saved", data : generatedId}
    }

    @Get()
    public async getProduct() : Promise<any>{
        const productData = await this.productService.getProduct();
        return { message : "Product data", data : productData}
    }

    @Patch(':id')
    public async updateProduct(
        @Param('id') productId : string,
        @Body('title') prodTitle : string,
        @Body('description') prodDesc : string,
        @Body('price') price : number
    ) : Promise<any>{
        const updateProduct = await this.productService.updateProduct(
            productId,
            prodTitle,
            prodDesc,
            price
        );
        return { message : "Updated data", data : updateProduct}

    }
}