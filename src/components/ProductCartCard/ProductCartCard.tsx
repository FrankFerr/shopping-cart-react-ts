import type { ProductCartCardProps } from "./ProductCardCartProps"

function ProductCartCard({ productCart }: ProductCartCardProps){
    return (
        <div className="flex flex-row border-2 border-white">
            <img className="h-full w-40 object-contain bg-gray-400" src={productCart.image} alt={productCart.title} />
        </div>
    )
}

export default ProductCartCard