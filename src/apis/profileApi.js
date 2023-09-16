import { useMutation, useQueries, useQuery } from "@tanstack/react-query"
import axios, { Axios } from "axios"
import useAxiosInstance from "../utils/useAxiosInstance"

const getUserProfile = async (id) => {
    return await useAxiosInstance.post(
      `  https://f8e1-103-175-181-228.ngrok-free.app/user/get`,
      
    )
  }


  const updateUserProfile = async (payload) => {
    return await useAxiosInstance.patch(
      `  https://f8e1-103-175-181-228.ngrok-free.app/user/update`,payload
    );
  };

  export const useGetUserProfile = () =>
  useQuery({
    queryKey: ["user-details"],
    queryFn: () => getUserProfile(),
  })



  export const useUpdateUserProfile = ()=>
    useMutation({
      mutationFn:(payload)=>updateUserProfile(payload)
    })
  