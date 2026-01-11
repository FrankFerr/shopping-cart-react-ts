import { NavLink } from "react-router-dom"

function SideBarProduct(){
    return(
        <div className="side-bar">
            <ul>
                <li>
                    <NavLink 
                        to={"/manage-products/insert"} 
                        className={({ isActive }) => isActive ? "active-prod-link" : "normal-prod-link"}
                    >
                        Insert Product
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to={"/manage-products/update"} 
                        className={({ isActive }) => isActive ? "active-prod-link" : "normal-prod-link"}
                    >
                        Update Product
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBarProduct