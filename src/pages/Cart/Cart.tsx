import Navbar from "../../components/Navbar/Navbar"
import { useSelector } from "react-redux"
import type { ProductCart } from "../../dto/ProductCart"
import type { RootState } from "../../redux/Store"
import ProductCartCard from "../../components/ProductCartCard/ProductCartCard"

function Cart(){
    const productsCart: ProductCart[] = useSelector((state: RootState) => state.cart)
    const emptyCart = <h1 className="text-white text-3xl font-bold">Il Carrello è vuoto</h1>

    return (
        <>
            <Navbar></Navbar>
            <div className="mt-5 flex justify-center gap-6">
                {
                    productsCart.length === 0 ?
                    emptyCart :
                    <>
                        <div className="w-3/5 h-full">
                            <h1 className="text-4xl font-bold mb-5">Carrello</h1>
                            <div className="h-full flex flex-col items-center">
                                {productsCart.map((prodCart) => <ProductCartCard key={prodCart.id} productCart={prodCart} />)}
                            </div>
                        </div>
                        <div className="w-fit h-52">
                            <p className="text-2xl font-bold">
                                Totale ({productsCart.reduce((accumulator, current) => accumulator + current.qta, 0)} articoli): {productsCart.reduce((accumulator, current) => accumulator + (current.price * current.qta), 0).toFixed(2).toString().replace('.', ',')}€
                            </p>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Cart