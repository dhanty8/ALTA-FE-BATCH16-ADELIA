import { Book, BookSchema, bookSchema } from "@/utils/apis/books";
import { getBook, putBook } from "@/utils/apis/books/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import CustomFormField from "@/components/custom-formfield";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const BookForm = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const [book, setBook] = useState<Book>();

  const form = useForm<BookSchema>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: book?.title,
      author: book?.author,
      isbn: book?.isbn,
      category: book?.category,
      description: book?.description,
    },
  });

  useEffect(() => {
    fetchDetailBook();
  }, [bookId]);

  useEffect(() => {
    if (book) {
      form.reset({
        title: book.title || '',
        author: book.author || '',
        isbn: book.isbn || '',
        category: book.category || '',
        description: book.description || '',
      });
    }
  }, [book, form]);

  const fetchDetailBook = async () => {
    try {
      const result = await getBook(bookId as string);

      setBook(result.payload);
    } catch (error) {}
  };

  

  const handleBook = async (data: BookSchema) => {
    try {
      const result = await putBook(bookId as string, data);
      if (result) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <Form {...form}>
        <form
          className="flex flex-col space-y-4 w-full px-5"
          onSubmit={form.handleSubmit(handleBook)}
        >
          <CustomFormField control={form.control} name="title" label="Title">
            {(field) => (
              <Input
                {...field}
                placeholder="Title"
                type="text"
                className="px-3 py-2"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField control={form.control} name="author" label="Author">
            {(field) => (
              <Input
                {...field}
                placeholder="Author"
                type="text"
                className="px-3 py-2"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField control={form.control} name="isbn" label="ISBN">
            {(field) => (
              <Input
                {...field}
                placeholder="ISBN"
                type="text"
                className="px-3 py-2"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="category"
            label="Category"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="Category"
                type="text"
                className="px-3 py-2"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="description"
            label="Description"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="Description"
                type="text"
                className="px-3 py-2"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <Button
            type="submit"
            variant="outline"
            className="ml-auto"
            disabled={form.formState.isSubmitting}
            aria-disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 animate-spin" /> Please Wait
              </>
            ) : (
              "Save Book"
            )}
          </Button>
        </form>
      </Form>
    </Layout>
  );
};

export default BookForm;
