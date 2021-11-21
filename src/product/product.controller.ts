import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@ApiTags('Products')
@Controller('products')
export class ProductController {
    constructor(private productSerice: ProductService){}

    @Get()
    async getProducts(){
        const data =  await this.productSerice.getProducts();
        return { data };
    }

    @Get(':id')
    async getProduct(@Param('id') id: number){
        const data = await this.productSerice.oneProuct(id);

        return data;
    }

    @Post()
    async createProduct(@Body() dto: ProductDto){
        const data = await this.productSerice.createProduct(dto);

        return { message: 'Product created', data}
    }

    @Put(':id')
    async updateProduct(@Body() dto: ProductDto, @Param('id') id: number){
        const data = await this.productSerice.editOne(id, dto);

        return {message:'Product data update', data};
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        const data = await this.productSerice.deletePro(id)

        return { message: 'Product deleted', data}
    }
}
