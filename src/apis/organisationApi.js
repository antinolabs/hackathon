import { useMutation,  useQuery } from "@tanstack/react-query"
import axios, { Axios } from "axios"
import useAxiosInstance from "../utils/useAxiosInstance"


const getOrganisationList = async()=>{
    return useAxiosInstance.post(`https://48a5-103-240-193-66.ngrok-free.app/organisation/get`

    )
}

export const useGetOrganisationList = ()=>
    useQuery({
        queryKey: ["organisation"],
        queryFn:  getOrganisationList,
    })
