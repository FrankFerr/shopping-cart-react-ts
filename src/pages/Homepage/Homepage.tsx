import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/Navbar/Navbar"
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/CartSlice";
import type { ProductCart } from "../../dto/ProductCart";
import SideBar from "../../components/SideBar/SideBar";
import { SideBarFilter } from "../../components/SideBar/SideBarFilter";
import { useState } from "react";
import { fetchProducts } from "./HomePageUtility";

function Homepage(){
    const [sideBarFilter, setSideBarFilter] = useState<SideBarFilter>(new SideBarFilter())
    const { data } = useQuery({
        queryFn: () => fetchProducts(sideBarFilter),
        queryKey: ["products", { sideBarFilter }],
        staleTime: Infinity
    })
    const dispatch = useDispatch()

    const onAddCart = (prod: ProductCart) => {
        dispatch(addProduct(prod))
    }

    const handleChangeFilter = (filter: SideBarFilter) => {
        setSideBarFilter(filter)
    }

    return (
        <>
            <Navbar></Navbar>
            <SideBar onChangeFilter={handleChangeFilter}></SideBar>
            <div className="w-3/4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-5 mt-24 ml-64">
                {data?.map((prod) => <ProductCard key={prod.id} product={prod} onAddCart={onAddCart} />)}
            </div>
        </>
    )
}

export default Homepage