import { UserPayloadModel } from "@/models";
import { persistLocalStorage, removeLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const EmptyUserState: UserPayloadModel = {
  access: '',
  refresh: '',
  email: '',
  nombre_completo: ''
}

const userKey = 'user'

const userSlice = createSlice({
  name: userKey,
  initialState: EmptyUserState,
  reducers: {
    createUser: (_state, action) => {
      persistLocalStorage<UserPayloadModel>(userKey, action.payload)
      return action.payload
    },
    updateUser: (state, action) => {
      const results = {...state, ...action.payload}
      persistLocalStorage<UserPayloadModel>(userKey, results)
      return results
    },
    resetUser: (_state, _action) => {
      removeLocalStorage(userKey)
      return EmptyUserState
    }
  }
})

export { EmptyUserState, userSlice, userKey }
export const { createUser, updateUser, resetUser } = userSlice.actions
