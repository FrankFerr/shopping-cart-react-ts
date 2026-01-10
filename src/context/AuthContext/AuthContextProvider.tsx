import { useState } from "react";
import type { AuthContextProps } from "./AuthContextProps";
import type { User } from "../../dto/User";
import { AuthContext } from "./AuthContext"

export function AuthContextProvider({ children }: AuthContextProps){
    const [user, setUserState] = useState<User | null>({
        id: 1,
        name: "Francesco Ferrante",
        email: "francesco@ferrante.com",
        role: "admin"
    })

    const setUser = (user: User | null) => {
        setUserState(user)
    }

    const isAdmin = () => user?.role === "admin"

    const isLoggedIn = () => user !== null

    return (
        <AuthContext.Provider value={{setUser, isAdmin, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}