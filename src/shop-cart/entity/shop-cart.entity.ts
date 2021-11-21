import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne
} from 'typeorm';
import { Product } from 'src/product/entity/product.entity';

@Entity('shop-cart')
export class ShopCartEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int'})
    quantity: number;

    @Column({ type: 'int'})
    productid: number;

    // @ManyToOne(() => Product,
    //     product => product.id,
    //     {eager: true}
    // )
    // @JoinColumn({ name: 'products'})
    // products: Product;
    
    @ManyToOne(() => Product, product => product.id, {eager: true})
    @JoinColumn({ name: 'productid', referencedColumnName: 'id' })
    products: Product;

    // @ManyToOne(
    //     () => Product, product => product.id,{ eager: true },
    //    )
    // @JoinColumn({ name: 'productos'})
    // productos: Product;
}
