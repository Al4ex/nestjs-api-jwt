import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
export class ProductDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsNotEmpty()
    price: number;
    
}