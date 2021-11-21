import { IsNotEmpty } from "class-validator";

export class ShopCartDto {
    @IsNotEmpty()
    quantity: number;
    @IsNotEmpty()
    productid: number;
}
