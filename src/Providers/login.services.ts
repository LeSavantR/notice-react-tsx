import { AuthLinks, RequestMethod, HeadersTypes, TokenModel, authorization } from "@/models"


const loginService = async ({ username, password, setError, setLoading}: any) => {
  setLoading(true)
  const req = await fetch(AuthLinks.LOGIN, {
      method: RequestMethod.POST,
      headers: {
        'Content-Type': HeadersTypes.CONTENT_TYPE_VALUE
      },
      body: JSON.stringify({username, password})
    })

    const data: TokenModel = await req.json()
    if (req.status !== 200 ) setError(req.statusText)
    setLoading(false)
    return data
}

export { loginService }
