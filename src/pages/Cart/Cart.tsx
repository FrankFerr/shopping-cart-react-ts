import Navbar from "../../components/Navbar/Navbar"
import { useSelector } from "react-redux"
import type { ProductCart } from "../../dto/ProductCart"
import type { RootState } from "../../redux/Store"
import ProductCartCard from "../../components/ProductCartCard/ProductCartCard"

function Cart(){
    const productsCart: ProductCart[] = useSelector((state: RootState) => state.cart)

    return (
        <>
            <Navbar></Navbar>
            <div className="w-screen h-full flex flex-col items-center mt-5">
                {productsCart.map((prodCart) => <ProductCartCard key={prodCart.id} productCart={prodCart} />)}
            </div>
        </>
    )
}

export default Cart