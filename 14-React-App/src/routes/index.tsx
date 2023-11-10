import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Detail from "../pages/books/detail";
import Index from '../pages/index'

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
        path: "*",
        element: <div>404 page not found</div>,
      },
  ]);
 
  return <RouterProvider router={router} />;
}