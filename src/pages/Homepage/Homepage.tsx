import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/Navbar/Navbar"
import ProductCard from "../../components/ProductCard/ProductCard";
import { GetAllProducts } from "../../utility/FakeStoreApi";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/CartSlice";
import type { ProductCart } from "../../dto/ProductCart";
import SideBar from "../../components/SideBar/SideBar";

function Homepage(){
    const { data } = useQuery({
        queryKey: ["products"],
        queryFn: GetAllProducts
    })
    const dispatch = useDispatch()

    const onAddCart = (prod: ProductCart) => {
        dispatch(addProduct(prod))
    }

    return (
        <>
            <Navbar></Navbar>
            <SideBar></SideBar>
            <div className="w-3/4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-5 mt-24 ml-64">
                {data?.map((prod) => <ProductCard key={prod.id} product={prod} onAddCart={onAddCart} />)}
            </div>
        </>
    )
}

export default Homepage