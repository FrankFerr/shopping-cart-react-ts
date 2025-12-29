import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductCart } from "../dto/ProductCart";

const init: ProductCart[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState: init,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductCart>) => {
            state.push(action.payload)
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            return state.filter((prod) => prod.id !== action.payload)
        },
        incrementQta: (state, action: PayloadAction<number>) => {
            for(const prod of state){
                if(prod.id === action.payload){
                    prod.qta++
                    break
                }
            }
        },
        decrementQta: (state, action: PayloadAction<number>) => {
            for(const prod of state){
                if(prod.id === action.payload){
                    prod.qta--
                    break
                }
            }
        }
    }
})

export const { addProduct, deleteProduct, incrementQta, decrementQta } = cartSlice.actions
export default cartSlice.reducer