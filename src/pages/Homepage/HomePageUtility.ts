import type { SideBarFilter } from "../../components/SideBar/SideBarFilter";
import type { Product } from "../../dto/Product";
import { GetAllProducts, GetProductsByCategory } from "../../utility/FakeStoreApi";

export async function fetchProducts(filter: SideBarFilter): Promise<Product[]>{
    console.log("eseguita la query")
    let products: Product[] = []

    try{
        products = filter.category === null ? 
                    await GetAllProducts() : 
                    await GetProductsByCategory(filter.category)

        if(filter.priceRangeMin !== null && filter.priceRangeMax !== null){
            products = products.filter((prod) => prod.price >= filter.priceRangeMin! && prod.price <= filter.priceRangeMax!)
        }

        return products
    }
    catch(err){
        console.log(err)
        return products
    }
}