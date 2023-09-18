import { useMutation,  useQuery } from "@tanstack/react-query"
import axios, { Axios } from "axios"
import useAxiosInstance from "../utils/useAxiosInstance"

const baseURL = import.meta.env.VITE_LOCAL_API_URL


const getOrganisationList = async()=>{
    return useAxiosInstance.post(
      `${baseURL}/organisation/get`
    );
}

export const useGetOrganisationList = ()=>
    useQuery({
        queryKey: ["organisation"],
        queryFn:  getOrganisationList,
    })
