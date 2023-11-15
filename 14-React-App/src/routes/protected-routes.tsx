import { Outlet, useLocation } from 'react-router-dom'

const ProtectedRoutes = () => {
  const {pathname} = useLocation();

  const authProtected = ["/login", "/register"]
  const tokenProtected = ["/profile", "/dashboard"]
  const roleProtected = ["/dashboard"]
  return <Outlet />
}

export default ProtectedRoutes