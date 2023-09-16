import { useMutation, useQueries, useQuery } from "@tanstack/react-query"
import axios, { Axios } from "axios"
import useAxiosInstance from "../utils/useAxiosInstance"

const getUserProfile = async (id) => {
    return await useAxiosInstance.post(
      ` https://f9c3-103-240-193-66.ngrok-free.app/user/get`,
      
    )
  }



  export const useGetUserProfile = () =>
  useQuery({
    queryKey: ["user-details"],
    queryFn: () => getUserProfile(),
  })