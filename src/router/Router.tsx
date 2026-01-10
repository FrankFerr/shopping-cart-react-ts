import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Cart from "../pages/Cart/Cart";
import ManageProducts from "../pages/ManageProducts/ManageProducts";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage></Homepage>
    },
    {
        path: "/cart",
        element: <Cart></Cart>
    },
    {
        path: "/manage-products",
        element: <ManageProducts></ManageProducts>
    }
])