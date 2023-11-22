import { PayloadPagination, Response } from "@/utils/types/api";

import { Borrows } from ".";
import axiosWithConfig from "../axiosWithConfig";

export const getBorrows = async () => {
    try {
      const response = await axiosWithConfig.get("https://hells-kitchen.onrender.com/api/v1/borrows");
  
      return response.data as Response<PayloadPagination<Borrows[]>>;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  };