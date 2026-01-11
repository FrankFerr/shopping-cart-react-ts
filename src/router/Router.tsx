import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Cart from "../pages/Cart/Cart";
import ManageProducts from "../pages/ManageProducts/ManageProducts";
import InsertProduct from "../pages/ManageProducts/Insert/InsertProduct";
import UpdateProduct from "../pages/ManageProducts/Update/UpdateProduct";

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
        element: <ManageProducts></ManageProducts>,
        children: [
            {
                path: "insert",
                element: <InsertProduct></InsertProduct>
            },
            {
                path: "update",
                element: <UpdateProduct></UpdateProduct>
            }
        ]
    }
])