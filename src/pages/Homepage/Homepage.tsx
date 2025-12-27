import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/Navbar/Navbar"
import ProductCard from "../../components/ProductCard/ProductCard";
import { GetAllProducts } from "../../utility/FakeStoreApi";

function Homepage(){
    const { data } = useQuery({
        queryKey: ["products"],
        queryFn: GetAllProducts
    })

    return (
        <>
            <Navbar></Navbar>
            <div className="w-3/4 grid grid-cols-5 gap-y-5 mt-5 bg-amber-200">
                {data?.map((prod) => <ProductCard key={prod.id} product={prod} />)}
            </div>
        </>
    )
}

export default Homepage