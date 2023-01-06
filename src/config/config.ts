import { TokenModel } from "@/models"

const config = ({ access }: TokenModel) =>  {
  return {
    headers: {
      Authorization: `Bearer ${access}`
    }
  }
}

export { config }