import Navbar from "../../components/Navbar/Navbar"
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/CartSlice";
import type { ProductCart } from "../../dto/ProductCart";
import SideBar from "../../components/SideBar/SideBar";
import { type PartialSideBarFilter } from "../../components/SideBar/SideBarFilter";
import { useCallback, useState } from "react";
import useProducts  from "../../hooks/UseProducts";

function Homepage(){
    const [sideBarFilter, setSideBarFilter] = useState<PartialSideBarFilter>({})
    const { data: products, isError } = useProducts(sideBarFilter)
    const dispatch = useDispatch()

    const onAddCart = (prod: ProductCart) => {
        dispatch(addProduct(prod))
    }

    const handleChangeFilter = useCallback(
        (filter: PartialSideBarFilter) => { setSideBarFilter(filter) }, 
        []
    )

    return (
        <>
            <Navbar></Navbar>
            <SideBar onChangeFilter={handleChangeFilter}></SideBar>
            <div className="w-3/4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-5 mt-24 ml-64">
                { isError ? <h1 className="text-3xl text-white text-center">Error loading products, please try again later</h1> : ""}
                { products ? products?.map((prod) => <ProductCard key={prod.id} product={prod} onAddCart={onAddCart} />) : ""}
            </div>
        </>
    )
}

export default Homepage