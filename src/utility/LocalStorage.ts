import type { ProductCart } from "../dto/ProductCart";

export function saveCartState(key: string, value: ProductCart[]){
    try{
        const serializedState = JSON.stringify(value)
        localStorage.setItem(key, serializedState)
    }
    catch(err){
        console.log("Errore durante il salvataggio del carrello -> ", err)
    }
}

export function loadCartState(key: string): ProductCart[] | undefined{
    try{
        const serializedState = localStorage.getItem(key)

        if(serializedState === null || serializedState === undefined){
            return undefined
        }

        return JSON.parse(serializedState)
    }
    catch(err){
        console.log("Errore durante il caricamento del carrello -> ", err)
    }
}