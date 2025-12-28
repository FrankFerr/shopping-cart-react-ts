import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"
import { saveCartStateMiddleware } from "../utility/StoreMiddleware";
import { LocalStorage } from "../utility/LocalStorage";
import type { ProductCart } from "../dto/ProductCart";

const preloadState: ProductCart[] = LocalStorage.loadState<ProductCart[]>("cart") ?? []

const store = configureStore({
    reducer: {
        cart: CartReducer
    },
    preloadedState: {
        cart: preloadState
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saveCartStateMiddleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch