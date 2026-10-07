import { Navigate, Outlet } from "react-router";
import { Navbar } from "../components/NavBar";
export const PrivateRoutes = () => {
  const isLogged = localStorage.getItem("isLogged") === "true";
  return isLogged ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};
