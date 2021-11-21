import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly products: Repository<Product>
    ){}

    async getProducts(){
        return await this.products.find();
    }
    async oneProuct(id: number){
        
        const oneProd = await this.products.findOne(id);
        if (!oneProd) {
            throw new NotFoundException('Product does not exist or unauthorized');
        }
        return oneProd;
    }

    async createProduct(productDto: ProductDto){
        const product = this.products.create(productDto);
        return await this.products.save(product);
    }
    async editOne(id: number, dto: ProductDto) {
        const post = await this.oneProuct(id);
        const editedProduct = Object.assign(post, dto);
        return await this.products.save(editedProduct);
    }
    async deletePro(id: number) {
        const produc = await this.oneProuct(id)
        return await this.products.remove(produc);
    }
     
}
