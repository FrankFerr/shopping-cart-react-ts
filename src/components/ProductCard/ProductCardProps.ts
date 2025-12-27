import type { Product } from "../../dto/Product";
import type { ProductCart } from "../../dto/ProductCart";

export interface ProductCardProps{
    product: Product
    onAddCart: (prod: ProductCart) => void
}