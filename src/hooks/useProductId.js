import { useQuery } from "@tanstack/react-query";
import { getProductIdApi } from "../api";

export const useProductById = (id) => {
  return useQuery({
    queryFn: () => getProductIdApi(id),
    queryKey: ["products", id],
    enabled: !!id,
  });
};
