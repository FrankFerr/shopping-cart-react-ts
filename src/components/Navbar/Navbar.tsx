import { memo } from "react"
import { NavLink } from "react-router-dom"

const isActiveClass = "h-full font-bold bg-[rgba(54,54,54,0.8)] hover:bg-[rgba(54,54,54,0.8)]"
const normalClass = "h-full hover:bg-[rgba(54,54,54,0.8)]"

function Navbar(){

    return (
        <nav className="w-screen h-16 bg-orange-800 flex items-center fixed top-0">
            <div className="w-1/2 text-left">
                <h1 className="font-bold text-2xl ml-4 text-shadow-lg text-shadow-black">Shopping Cart</h1>
            </div>
            <div className="h-full w-1/2">
                <ul className="h-full w-full flex items-center">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? isActiveClass : normalClass}>
                        <li className="h-full flex items-center px-4">Homepage</li>
                    </NavLink>
                    <NavLink to={"/cart"} className={({ isActive }) => isActive ? isActiveClass : normalClass}>
                        <li className="h-full flex items-center px-4">Cart</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default memo(Navbar)