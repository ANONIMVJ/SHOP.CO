import { toast } from "react-toastify";

import instance from "./instance";

export const getProductsApi = async (params) => {
  
  try {

    console.log("API params:", params);

    const queryParams = new URLSearchParams();

    if (params?.category) queryParams.set("category", params.category);

    if (params?.size) queryParams.set("size", params.size);
    
    const queryString = queryParams.toString();

    const url = `/e-commerce/products${queryString ? `?${queryString}` : ""}`;

    const res = await instance.get(url);

    let filteredData = res.data;

    if (params?.size) filteredData = filteredData.filter( (product) => product.size && product.size.includes(params.size) );
    
    if (params?.minPrice !== undefined || params?.maxPrice !== undefined) {

      const minPrice = params?.minPrice !== undefined ? Number(params.minPrice) : 0;

      const maxPrice = params?.maxPrice !== undefined ? Number(params.maxPrice) : Infinity;

      filteredData = filteredData.filter( (product) => product.price >= minPrice && product.price <= maxPrice );
    }
    return filteredData;

  } catch (e) {

    toast.error(`Failed to fetch Products!`, e);

    return [];

  }

};
