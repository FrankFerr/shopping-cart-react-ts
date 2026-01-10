import { useState } from "react";
import type { AuthContextProps } from "./AuthContextProps";
import type { User } from "../../dto/User";
import { AuthContext } from "./AuthContext"

export function AuthContextProvider({ children }: AuthContextProps){
    const [user, setUserState] = useState<User>({
        id: 1,
        name: "Francesco Ferrante",
        email: "francesco@ferrante.com",
        role: "admin"
    })

    const setUser = (user: User) => {
        setUserState(user)
    }

    const isAdmin = () => user?.role === "admin"

    return (
        <AuthContext.Provider value={{setUser, isAdmin}}>
            {children}
        </AuthContext.Provider>
    )
}