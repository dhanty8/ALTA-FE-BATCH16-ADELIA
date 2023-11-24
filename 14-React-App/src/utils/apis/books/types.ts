import * as z from "zod";

export const bookSchema = z
  .object({
    title: z.string().min(1, { message: "Title is required" }),
    author: z.string().min(1, { message: "Author is required" }),
    isbn: z.string().min(1, { message: "ISBN is required" }),
    category: z.string().min(1, { message: "Category is required" }),
    description: z
      .string()
      .min(1, { message: "Description is is required" }),
  })

export type BookSchema = z.infer<typeof bookSchema>;

export interface Book {
    id: number;
    title: string;
    featured: boolean;
    author: string;
    isbn: string;
    category: string;
    description: string;
    cover_image: string;
}