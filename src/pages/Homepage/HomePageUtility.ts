import type { PartialSideBarFilter } from "../../components/SideBar/SideBarFilter";
import type { Product } from "../../dto/Product";
import { GetAllProducts, GetProductsByCategory } from "../../utility/FakeStoreApi";

export async function fetchProducts(filter: PartialSideBarFilter): Promise<Product[]>{
    console.log("eseguita la query")
    let products: Product[] = []

    try{
        products = filter.category ? 
                    await GetProductsByCategory(filter.category) :
                    await GetAllProducts() 

        if(filter.priceRangeMin && filter.priceRangeMax){
            products = products.filter((prod) => prod.price >= filter.priceRangeMin! && prod.price <= filter.priceRangeMax!)
        }

        return products
    }
    catch(err){
        console.log(err)
        return products
    }
}