import { useMutation } from "@tanstack/react-query"
import { message } from "antd"
import axios from "axios"
import Cookies from "js-cookie"
import { configureAuth } from "react-query-auth"
import { Navigate, redirect, useNavigate } from "react-router"
import useAxiosInstance from "../utils/useAxiosInstance"



const loginFn = (credentials) => {
  try {
    const data = axios.post(` ${process.env.baseurl}/user/login`, credentials)
    // Cookies.set("token", `${data.response.token}`, { secure: true })
    return data
  } catch (e) {
    console.log(e)
    return e
  }
}
const registerFn = async (credentials) => {
  return await axios.post(`${process.env.baseurl}/user/register`, credentials);
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