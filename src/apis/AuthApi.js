import { useMutation } from "@tanstack/react-query"
import { message } from "antd"
import axios from "axios"
import Cookies from "js-cookie"
import { configureAuth } from "react-query-auth"
import { Navigate, redirect, useNavigate } from "react-router"
import useAxiosInstance from "../utils/useAxiosInstance"


const baseURL = import.meta.env.VITE_LOCAL_API_URL





const loginFn = (credentials) => {
 
  try {
    if(credentials.userType === "user"){
      const data = axios.post(`${baseURL}/user/login`, credentials)
    // Cookies.set("token", `${data.response.token}`, { secure: true })
    return data
    }else{
      const data = axios.post(`${baseURL}/admin/login`, credentials)
      // Cookies.set("token", `${data.response.token}`, { secure: true })
      return data
    }
    
  } catch (e) {
    console.log(e)
    return e
  }
}
const registerFn = async (credentials) => {
  return await axios.post(`${baseURL}/user/register`, credentials);
}

const logoutFn = () => {
  Cookies.remove("token")
  window.location.href = "/"
}

export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
    userFn: () => useAxiosInstance("/user/profile"),
    loginFn,
    registerFn,
    logoutFn,
  })