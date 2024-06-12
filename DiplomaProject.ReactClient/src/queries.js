import { useQuery } from "@tanstack/react-query";
import { getAllCertificates, getByIdCertificate } from "./certificateApi";

export const useAllCertificates = () => {
    return useQuery({
        queryKey: ['certificates'],
        queryFn: () => getAllCertificates(),
        refetchOnWindowFocus: false
    })
};

export const useGetCertificate = (id) => {
    return useQuery({
        queryKey: ['certificate'],
        queryFn: () => getByIdCertificate(id),
        refetchOnWindowFocus: false
    })
};