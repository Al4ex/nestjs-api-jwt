import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopCartDto } from './dto/shop-cart.dto';
import { ShopCartEntity } from './entity/shop-cart.entity';

@Injectable()
export class ShopCartService {
    constructor( 
        @InjectRepository(ShopCartEntity) 
        private readonly shopCart: Repository<ShopCartEntity> 
    ){}
    
    // Obtener todos los productos del carrito
    async getAll() {
        const data = await this.shopCart.find();
        const product = data
            .map( dato =>{
                return{
                    id: dato.id,
                    quantity: dato.quantity,
                    products: { 
                        name: dato.products.name,
                        price: dato.products.price
                    }
                }
            })
        return product;
    }
    async getOne(id: number){
        const data = await this.shopCart.findOne(id);
        if(!data){
            throw new NotFoundException('Product does not exist or unauthorized');
        }
        return data;
    }

    // async getProduct(productID: string): Promise<Product> {
    //     const product = await this.productModel.findById(productID); 
    //     return product;
    // }

    // Post a single product
    async addCartShop(shopCartDto: ShopCartDto) {
        const { productid, quantity } = shopCartDto;
        const cart = await this.shopCart.find();
        const [data] = cart
            .filter(data => data.productid == productid)
            .map(dato => {
                    dato.quantity += quantity         
                    return {
                        cant: dato.quantity,
                        id: dato.id
                    };
            })
        
        // const b = a.map(dato => {
        //         dato.quantity += quantity         
        //     return dato;
        // })
        // console.log(data.id);
        if (data) {
            const qf = data.cant + quantity;
            const editedcart = Object.assign(cart, {quantiti: qf});
            console.log(editedcart);
            return await this.shopCart.save(editedcart);
        } else{
            const newCartShop = this.shopCart.create(shopCartDto);
            return await this.shopCart.save(newCartShop);
        }
    }

    // Delete Product
    
    async deletePro(id: number) {
        const cartPro = await this.getOne(id)
        return await this.shopCart.remove(cartPro);
    }

    // // Put a single product
    // async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product> {
    //     const updatedProduct = await this.productModel
    //                         .findByIdAndUpdate(productID, createProductDTO, {new: true});
    //     return updatedProduct;
    // }
}
