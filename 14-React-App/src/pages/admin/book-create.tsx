import { BookSchema, bookSchema } from "@/utils/apis/books";

import { Button } from "@/components/ui/button";
import CustomFormField from "@/components/custom-formfield";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";
import { Loader2 } from "lucide-react";
import { postBook } from "@/utils/apis/books/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

const BookFormCreate = () => {
  const navigate = useNavigate();

  const form = useForm<BookSchema>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      author: "",
      isbn: "",
      category: "",
      description: "",
    },
  });

  const handleBook = async (data: BookSchema) => {
    try {
      const result = await postBook(data);
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

export default BookFormCreate;
