import { useQuery } from "@tanstack/react-query"
import { getProductsApi } from "../api"

export const useProducts = (params) => {
    return useQuery({
        queryFn: () => getProductsApi(params),
        queryKey: ['products', params],
        enabled: !!params?.category
    })
}