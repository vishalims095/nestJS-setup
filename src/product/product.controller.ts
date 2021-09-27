import {Controller, Post, Body, Get, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common'
import {FileInterceptor} from '@nestjs/platform-express'
import {productService} from './product.service'
import { Helper } from '../service/uploadImg';
import { diskStorage } from 'multer';

import { request } from 'http';

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
    @Delete('/deleteProduct/:id')
    public async deleteProduct(
        @Param('id') productId : string,
    ){
        const removeProduct = await this.productService.deleteProduct(
            productId
        )
        return { message : "Product data removed.", data : removeProduct}
    }

    @Post('/addImage/')
    public async addImage(
        @Body('imageName') imageName : string,
    ){
        console.log("Add image calling")
    }
    // server.app.use('/api/v1/upload', express.Router().post('/', upload.single('file'), (req: any, res, next) => {   
    //     console.log(req.file,'<<<------------')
    //     res.send({'fileName' : req.file.filename || ''})
    // }));  

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('picture', {
            storage: diskStorage({
                destination: Helper.destinationPath,
                filename: Helper.customFileName,
            }),
        }),
    )

    uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    }
}