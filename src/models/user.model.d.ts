import { TokenModel, UserPayloadModel } from "./@types.user";

const initialStateToken: TokenModel = {
  access: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjkwMDAwMDAwMCwidG9rZW5fdHlwZSI6IkpXVCIsInVzZXJfaWQiOiIxIiwiZW1haWwiOiJsZXNhdmFudEBtYWlsLmlvIiwibm9tYnJlX2NvbXBsZXRvIjoiUnViZW4gSGVybmFuZGV6In0.zceEzJOoO4S8wsTszsNpEUEXC6NKf9RiCGPuxnYTD6U',
  refresh: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjkwMDAwMDAwMCwidG9rZW5fdHlwZSI6IkpXVCIsInVzZXJfaWQiOiIxIiwiZW1haWwiOiJsZXNhdmFudEBtYWlsLmlvIiwibm9tYnJlX2NvbXBsZXRvIjoiUnViZW4gSGVybmFuZGV6In0.zceEzJOoO4S8wsTszsNpEUEXC6NKf9RiCGPuxnYTD6U'
}

const initialStateUserPayloadModel: UserPayloadModel = {
  access: '',
  refresh: '',
  email: '',
  nombre_completo: '',
}

export { initialStateToken, initialStateUserPayloadModel }