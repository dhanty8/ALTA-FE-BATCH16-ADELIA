import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Detail from "../pages/books/detail";
import Index from '../pages/index'
import Login from "../pages/auth/login";

export default function Router() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <div>404 page not found</div>,
      },
  ]);
 
  return <RouterProvider router={router} />;
}