import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators';
import { ShopCartDto } from './dto/shop-cart.dto';
import { ShopCartService } from './shop-cart.service';

@ApiTags('Shop-Cart')
@Controller('shop-cart')
export class ShopCartController {
    constructor(private cartService: ShopCartService) { }
    //POST new or add more product
    @Auth()
    @Patch()
    async addCartShop(@Body() dto: ShopCartDto) {
        // console.log(dto);
        const data = await this.cartService.addCartShop(dto);
        return { message: 'Cart added', data };
    }
    
    // Get shop-cart
    @Auth()
    @Get()
    async getAll() {
        const data = await this.cartService.getAll();
        return { data };
    }
    @Auth()
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.cartService.getOne(id);
        return { data };
    }
    // Delete Product: /delete/id
    @Auth()
    @Delete(':id')
    async deletePro(@Param('id') id) {
        const data = await this.cartService.deletePro(id);
        return { data };
    }
}
