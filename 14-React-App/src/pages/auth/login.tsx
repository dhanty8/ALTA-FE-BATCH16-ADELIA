import { Link, useNavigate } from "react-router-dom";
import { LoginSchema, loginSchema } from "@/utils/apis/auth";

import { Button } from "@/components/ui/button";
import CustomFormField from "@/components/custom-formfield";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { postLogin } from "../../utils/apis/auth/api";
import { useForm } from "react-hook-form";
import { useToken } from "@/utils/contexts/token";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const { changeToken } = useToken();
  const navigate = useNavigate();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: LoginSchema) => {
    try {
      const result = await postLogin(data);
      changeToken(result.payload.token);
      const token = result.payload.token;
      if (token) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-lg border border-gray-600 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
        <Form {...form}>
          <form
            className="flex flex-col space-y-4"
            onSubmit={form.handleSubmit(handleLogin)}
          >
            <CustomFormField control={form.control} name="email" label="Email">
              {(field) => (
                <Input
                  {...field}
                  placeholder="mail@domain.com"
                  type="email"
                  className="px-3 py-2 bg-gray-900 rounded-md outline-none border-gray-800 border-2 border-solid text-gray-300 focus:border-gray-600"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                />
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
            >
              {(field) => (
                <Input
                  {...field}
                  placeholder="Password"
                  type="password"
                  className="px-3 py-2 bg-gray-900 rounded-md outline-none border-gray-800 border-2 border-solid text-gray-300 focus:border-gray-600"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                />
              )}
            </CustomFormField>
            <Link to={"/register"} className="text-gray-300">
              Not yet register ?
            </Link>
            <Button
              type="submit"
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (<><Loader2 className="mr-2 h-4 animate-spin" /> Please Wait</>) : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
