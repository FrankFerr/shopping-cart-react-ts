import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Cart from "../pages/Cart/Cart";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage></Homepage>
    },
    {
        path: "/cart",
        element: <Cart></Cart>
    }
])