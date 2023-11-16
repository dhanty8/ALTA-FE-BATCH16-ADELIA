import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Books from "../pages/books";
import Detail from "../pages/books/detail";
import HistoryBorrow from "../pages/profile/history-borrow";
import Login from "../pages/auth/login";
import ProtectedRoutes from "./protected-routes";
import Register from "../pages/auth/register";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <Books />,
        },
        {
          path: "/detail/:bookId",
          element: <Detail />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/history-borrow",
          element: <HistoryBorrow />,
        },
        {
          path: "*",
          element: <div>404 page not found</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}