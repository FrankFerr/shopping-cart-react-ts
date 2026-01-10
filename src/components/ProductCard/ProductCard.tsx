import type { ProductCart } from "../../dto/ProductCart";
import RatingStar from "../RatingStar/RatingStar"
import type { ProductCardProps } from "./ProductCardProps"
import { BsCartPlusFill } from "react-icons/bs";

function ProductCard({ product, onAddCart }: ProductCardProps){
    const addToCart = () => {
        const prod: ProductCart = {
            id: product.id,
            image: product.image,
            price: product.price,
            title: product.title,
            qta: 1,
            category: product.category
        }

        onAddCart(prod)
    }

    return (
        <div className="w-60 bg-zinc-900 border-2 border-white">
            <img className="w-full h-64 object-contain p-4 bg-[rgba(85,85,85,0.5)]" src={product.image} alt={product.title}></img>
            <div className="p-2">
                <h4 className="text-center mb-2">{product.title}</h4>
                <hr className="mb-2"/>
                <p className="text-sm text-[rgba(220,220,220,0.85)] flex items-center gap-2 mb-2">{product.rating.rate} <RatingStar rate={product.rating.rate} star={5} /> ({product.rating.count})</p>
                <p className="text-sm text-blue-400 mb-2">{product.category}</p>
                <p className="text-2xl font-medium mb-2">{product.price.toFixed(2).replace('.', ',')}€</p>
                <button 
                    className="btn-icon my-3 mx-auto text-sm"
                    onClick={addToCart}
                ><BsCartPlusFill /> Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard