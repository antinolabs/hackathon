import { useMutation,  useQuery } from "@tanstack/react-query"
import axios, { Axios } from "axios"
import useAxiosInstance from "../utils/useAxiosInstance"


const getOrganisationList = async()=>{
    return useAxiosInstance.post(` https://f8e1-103-175-181-228.ngrok-free.app/organisation/get`

    )
}

export const useGetOrganisationList = ()=>
    useQuery({
        queryKey: ["organisation"],
        queryFn:  getOrganisationList,
    })
