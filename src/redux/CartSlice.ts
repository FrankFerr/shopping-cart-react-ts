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
            state = state.filter((prod) => prod.id !== action.payload)
        },
        incrementQta: (state, action: PayloadAction<number>) => {
            state = state.map((prod) => {
                if(prod.id === action.payload)
                    prod.qta++
            })
        }
    }
})