import { PayloadPagination, Response } from "../../types/api";

import { Book } from ".";
import axiosWithConfig from "../axiosWithConfig";

export const getBooks = async (limit?:number) => {
  try {
    const response = await axiosWithConfig(
      `https://hells-kitchen.onrender.com/api/v1/books${limit ? `?limit=${limit}`: ""}`
    );

    return response.data as Response<PayloadPagination<Book[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getNewBooks = async () => {
    try {
      const response = await axiosWithConfig(
        "https://hells-kitchen.onrender.com/api/v1/books?sort=New&limit=5"
      );
  
      return response.data as Response<PayloadPagination<Book[]>>;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  };

  export const getBook = async (bookId: string) => {
    try {
      const response = await axiosWithConfig(
        `https://hells-kitchen.onrender.com/api/v1/books/${bookId}`
      );
  
      return response.data as Response<Book>;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  };

  export const getBookSearchResult = async (query: string) => {
    try {
      const response = await axiosWithConfig(
        `https://hells-kitchen.onrender.com/api/v1/books?query=${query}`
      );
  
      return response.data as Response<PayloadPagination<Book[]>>;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  };