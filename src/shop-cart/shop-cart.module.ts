import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopCartEntity } from './entity/shop-cart.entity';
import { ShopCartController } from './shop-cart.controller';
import { ShopCartService } from './shop-cart.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ShopCartEntity])],
  controllers: [ShopCartController],
  providers: [ShopCartService]
})
export class ShopCartModule {}
