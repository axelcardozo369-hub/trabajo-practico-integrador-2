import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { API_URL } from "../config/api";

export const Navbar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    setError(null);
    try {
      const respuesta = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (respuesta.ok) {
        localStorage.removeItem("isLogged");
        navigate("/login");
      } else {
        setError("No se pudo cerrar la sesión");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <nav className="w-full bg-slate-900 text-white px-4 sm:px-6">
      <ul className="flex items-center gap-8 py-4">
        <li>
          <Link to={"/"} className="hover:text-sky-400">
            Inicio
          </Link>
        </li>
        <li className="ml-auto flex items-center gap-4">
          {error && <span className="text-red-400 text-sm">{error}</span>}
          <button
            onClick={handleLogout}
            className="hover:text-red-400 cursor-pointer"
          >
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};
