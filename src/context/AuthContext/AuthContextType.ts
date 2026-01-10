import type { User } from "../../dto/User"

export interface AuthContextType {
    setUser: (user: User) => void
    isAdmin: () => boolean
    isLoggedIn: () => boolean
}