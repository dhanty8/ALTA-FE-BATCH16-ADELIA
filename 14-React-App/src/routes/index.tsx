import { RouterProvider, createBrowserRouter } from "react-router-dom";

import BookForm from "@/pages/admin/book-edit";
import BookFormCreate from "@/pages/admin/book-create";
import Books from "../pages/books";
import Dashboard from "../pages/admin"
import Detail from "../pages/books/detail";
import EditProfile from "../pages/profile/edit-profile";
import HistoryBorrow from "../pages/profile/history-borrow";
import Login from "../pages/auth/login";
import Profile from "../pages/profile"
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
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/edit-profile",
          element: <EditProfile />,
        },
        {
          path: "/history-borrow",
          element: <HistoryBorrow />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard-book",
          element: <BookFormCreate />,
        },
        {
          path: "/dashboard-book/:bookId",
          element: <BookForm />,
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