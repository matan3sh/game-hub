import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "66f5b0362ed84745bbb2a9dc082ba633",
  },
})
