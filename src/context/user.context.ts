import { createContext } from "react"
import { userContextType } from "@/models"

const userContext = createContext<userContextType | null>(null)

export { userContext }
