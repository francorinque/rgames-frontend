import axios from "axios"

export const instance = axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: "https://rgames-backend-production.up.railway.app",
})

export const searchGame = async ({ name }) => {
  try {
    const { data } = await instance.get(`?name=${name}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
