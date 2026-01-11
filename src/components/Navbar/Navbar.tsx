import { memo } from "react"
import { NavLink } from "react-router-dom"
import { useAuthContext } from "../../hooks/UseAuthContext"

function Navbar(){
    const authContext = useAuthContext()

    return (
        <nav className="w-screen h-16 bg-orange-800 flex items-center fixed top-0">
            <div className="w-1/2 text-left">
                <h1 className="ml-4 text-shadow-lg text-shadow-black">Shopping Cart</h1>
            </div>
            <div className="h-full w-1/2">
                <ul className="h-full w-full flex items-center">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? "active-nav-link" : "normal-nav-link"}>
                        <li className="nav-link">Homepage</li>
                    </NavLink>
                    <NavLink to={"/cart"} className={({ isActive }) => isActive ? "active-nav-link" : "normal-nav-link"}>
                        <li className="nav-link">Cart</li>
                    </NavLink>
                    { 
                        authContext.isAdmin() && 
                        <NavLink to={"/manage-products"} className={({ isActive }) => isActive ? "active-nav-link" : "normal-nav-link"}>
                            <li className="nav-link">Manage Products</li>
                        </NavLink>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default memo(Navbar)