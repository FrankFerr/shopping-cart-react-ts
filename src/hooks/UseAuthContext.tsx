import { useContext } from "react"
import { AuthContext } from "../context/AuthContext/AuthContext"

export function useAuthContext(){
    const authContext = useContext(AuthContext)

    if(authContext === undefined)
        throw new Error("useAuthContext deve essere usato dentro AuthContextProvider")

    return authContext
}