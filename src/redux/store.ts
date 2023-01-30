import { UserPayloadModel } from "@/models"
import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./states/user"

interface AppStore {
  user: UserPayloadModel
}

const store = configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer
  }
})

export type { AppStore }
export { store }
