import type { Product } from "../dto/Product";
import { Endpoints } from "../environment/Endpoints";

export async function GetAllProducts(): Promise<Product[]> {
    try{
        const response = await fetch(Endpoints.FakeStore.baseUrl + Endpoints.FakeStore.products)

        if(!response.ok){
            console.log(response)
            throw new Error("Errore durante il caricamento dei prodotti")
        }

        const data = await response.json()

        return data
    }
    catch(err){
        console.log(err)
        throw new Error("Errore durante il caricamento dei prodotti")
    }
}

export async function GetAllCategories(): Promise<string[]> {
    try{
        const response = await fetch(Endpoints.FakeStore.baseUrl + Endpoints.FakeStore.categories)

        if(!response.ok){
            console.log(response)
            throw new Error("Errore durante il caricamento delle categorie")
        }

        const data = await response.json()

        return data
    }
    catch(err){
        console.log(err)
        throw new Error("Errore durante il caricamento delle categorie")
    }
}