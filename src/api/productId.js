import { toast } from "react-toastify";

import instance from "./instance";

export const getProductIdApi = async (id) => {

  try {

    const res = await instance.get(`/e-commerce/products/${id}`);

    return res.data;

  } catch (e) {

    toast.error(`Failed to fetch Product!`, e);
    
  }
};
