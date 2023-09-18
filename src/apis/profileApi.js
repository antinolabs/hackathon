import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../utils/useAxiosInstance";

const baseURL = import.meta.env.VITE_LOCAL_API_URL


const getUserProfile = async (id) => {
    return await useAxiosInstance.post(
      `${baseURL}/user/get`,
      
    )
  }

const updateUserProfile = async (payload) => {
  return await useAxiosInstance.patch(
    `${baseURL}/user/update`,
    payload
  );
};

const createOrder = async (payload) => {
  return await useAxiosInstance.post(
    `${baseURL}/transaction/create-order`,
    payload
  );
};

  

  export const useGetUserProfile = () =>
  useQuery({
    queryKey: ["user-details"],
    queryFn: () => getUserProfile(),
  });



  export const useUpdateUserProfile = ()=>
    useMutation({
      mutationFn:(payload)=>updateUserProfile(payload)
    })
  
     export const useCreateOrder = () =>
       useMutation({
         mutationFn: (payload) => createOrder(payload),
       });
  
