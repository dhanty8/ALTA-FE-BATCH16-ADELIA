import { LoginSchema, RegisterSchema } from ".";

import { Response } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";

export const postLogin = async (body: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post(
      "https://hells-kitchen.onrender.com/api/v1/login",
      body
    );

    return response.data as Response<{token: string}>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const postRegister = async (body: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post(
      "https://hells-kitchen.onrender.com/api/v1/register",
      body
    );
    

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
