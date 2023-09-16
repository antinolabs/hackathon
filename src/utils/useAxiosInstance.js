import axios from "axios"
import Cookies from "js-cookie"
import { redirect } from "react-router"

let baseURL

if (import.meta.env.DEV) {
  baseURL = import.meta.env.VITE_LOCAL_API_URL
}

const useAxiosInstance = axios.create({
  baseURL: baseURL,
})

useAxiosInstance.interceptors.request.use(function (config) {
  config.headers["authorization"] = `bearer ${Cookies.get("token")}`
  return config
})

useAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove("token")
      redirect("/auth/login")
    } else return Promise.reject(error)
  },
)

export default useAxiosInstance
