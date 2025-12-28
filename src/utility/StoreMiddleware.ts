import type { Middleware } from "@reduxjs/toolkit";
import { LocalStorage } from "./LocalStorage";

export const saveCartStateMiddleware: Middleware = store => next => action =>{
    const result = next(action)

    if(action.type.startsWith("cart")){
        const cartState = store.getState().cart
        LocalStorage.saveState("cart", cartState)
    }

    return result
}