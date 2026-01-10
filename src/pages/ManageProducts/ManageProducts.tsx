import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import SideBarProduct from "../../components/SideBarProduct/SideBarProduct"
import { useAuthContext } from "../../hooks/UseAuthContext"

function ManageProducts(){
    const authContext = useAuthContext()

    if(!authContext.isLoggedIn() || !authContext.isAdmin()){
        return <Navigate to={"/"} replace />
    }

    return(
        <>
            <Navbar></Navbar>
            <SideBarProduct></SideBarProduct>
            <div className="mt-24 ml-64">
                <Outlet/>
            </div>
        </>
    )
}

export default ManageProducts