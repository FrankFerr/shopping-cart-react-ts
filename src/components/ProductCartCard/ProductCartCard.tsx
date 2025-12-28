import type { ProductCartCardProps } from "./ProductCardCartProps"
import QtaChanger from "../QtaChanger/QtaChanger"
import { deleteProduct, incrementQta, decrementQta } from "../../redux/CartSlice"
import { useDispatch } from "react-redux"

function ProductCartCard({ productCart }: ProductCartCardProps){
    const dispatch = useDispatch()

    const onAddQta = () => {
        dispatch(incrementQta(productCart.id))
    }

    const onSubtractQta = () => {
        dispatch(decrementQta(productCart.id))
    }

    const onDeleteProd = () => {
        dispatch(deleteProduct(productCart.id))
    }

    return (
        <div className="flex flex-row w-1/2 p-4 border-y border-white">
            <img className="h-full w-40 object-contain" src={productCart.image} alt={productCart.title} />
            <div className="ml-4">
                <h1 className="text-2xl font-medium">{productCart.title}</h1>
                <p className="text-sm text-blue-400 mt-2 mb-4">{productCart.category}</p>
                <QtaChanger qta={productCart.qta} onPlus={onAddQta} onSubtract={onSubtractQta} onDelete={onDeleteProd}/>
                <p className="text-2xl font-medium mt-4">{productCart.price.toString().replace('.', ',')}€</p>
            </div>
        </div>
    )
}

export default ProductCartCard