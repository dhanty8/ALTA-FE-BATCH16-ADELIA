import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useToken } from '@/utils/contexts/token';

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const { token, user } = useToken();

  const authProtected = ["/login", "/register"]
  const tokenProtected = ["/profile", "/dashboard", "/history-borrow", "/edit-profile"]
  const roleProtected = ["/dashboard"]

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (tokenProtected.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;

    if (roleProtected.includes(pathname)) {
      if (user.role === "user") return <Navigate to="/" />;
    }
  }
  return <Outlet />
}

export default ProtectedRoutes