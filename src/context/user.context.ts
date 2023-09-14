import { createContext } from "react"
import { userContextType } from "@/models"
import { initialUser } from "@/providers"


const userContext = createContext<userContextType>(initialUser)

export { userContext }
