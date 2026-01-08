import { useQuery } from "@tanstack/react-query";
import type { PartialSideBarFilter } from "../components/SideBar/SideBarFilter";
import type { Product } from "../dto/Product";
import { fetchProducts } from "../pages/Homepage/HomePageUtility";

export default function useProducts(sideBarFilter: PartialSideBarFilter = {}){
    return useQuery<Product[]>({
        queryFn: () => fetchProducts(sideBarFilter),
        queryKey: ["products", { sideBarFilter }],
        staleTime: Infinity
    })
}