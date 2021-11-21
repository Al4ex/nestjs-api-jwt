// import { ShopCartEntity } from 'src/shop-cart/entity/shop-cart.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
} from 'typeorm';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 150 })
    name: string;
    @Column({ type: 'text'})
    description: string;
    @Column({ type: 'int'  })
    price: number;
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    // @OneToOne(
    //     _ => ShopCartEntity,
    //     shop => shop.products,
    //     { cascade: true },
    //   )
    //   shop: ShopCartEntity;
}
