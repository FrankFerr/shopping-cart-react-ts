import type { User } from "../dto/User";

export async function GetUserByEmail(email: string): Promise<User>{
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return {
        id: 1,
        name: "Francesco Ferrante",
        email: "francesco@ferrante.com",
        role: "admin"
    }
}