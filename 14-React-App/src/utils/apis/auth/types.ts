// export interface Token {
//   token: string;
// }

// export interface LoginBody {
//   email: string;
//   password: string;
// }

// export interface RegisterBody {
//   full_name: string;
//   email: string;
//   password: string;
//   role: string;
//   address: string;
//   phone_number: string;
// }
import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z
  .object({
    full_name: z.string().min(1, { message: "Full name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Not a valid email"),
    password: z.string().min(6, { message: "Password is required" }),
    repassword: z.string().min(6, { message: "Retype Password is required" }),
    role: z.string().default("user"),
    address: z.string().min(1, { message: "Address is required" }),
    phone_number: z
      .string()
      .min(7, { message: "Phone number minimum length is 7" }),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Password is don't match",
    path: ["repassword"],
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
