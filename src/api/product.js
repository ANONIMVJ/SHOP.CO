import { toast } from "react-toastify"
import instance from "./instance";

export const getProductsApi = async (params) => {
    try {
        const res = await instance.get(`/e-commerce/products?category=${params.category}`);
        return res.data;
    } catch (e) {
        toast.error(`Failed to fetch Products!`);
    }
}