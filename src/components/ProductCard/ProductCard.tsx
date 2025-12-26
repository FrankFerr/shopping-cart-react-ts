import RatingStar from "../RatingStar/RatingStar"
import type { ProductCardProps } from "./ProductCardProps"

function ProductCard({ product }: ProductCardProps){
    return (
        <div className="w-52 bg-zinc-900 border-2 border-white">
            <img className="p-4 bg-[rgba(85,85,85,0.5)]" src={product.image} alt={product.title}></img>
            <div className="p-2">
                <h1 className="text-lg font-medium text-center">{product.title}</h1>
                <hr className="my-2"/>
                <p className="text-sm text-[rgba(220,220,220,0.85)] flex gap-2">{product.rating.rate} <RatingStar rate={3.2} /> ({product.rating.count})</p>
            </div>
        </div>
    )
}

export default ProductCard