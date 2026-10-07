import { useState } from "react";
import { API_URL } from "../config/api";
import { useForm } from "../hooks/useForm";
import { Link, useNavigate } from "react-router";
export const LoginPage = () => {
  const { form, handleInputChange } = useForm({ email: "", password: "" });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const respuesta = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const resultado = await respuesta.json();
      console.log(respuesta.status, resultado);
      if (respuesta.ok) {
        localStorage.setItem("isLogged", "true");
        navigate("/");
      } else {
        setError(resultado.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="border-2 border-slate-300 rounded-xl p-4 shadow-sm">
        <h1 className="text-3xl font-bold text-red-600">Login</h1>

        <form className="flex flex-col gap-1.5 mt-2" onSubmit={handleSubmit}>
          <input
            type="email"
            className="border"
            autoComplete="email"
            placeholder="email"
            name="email"
            onChange={handleInputChange}
            value={form.email}
          />
          <input
            type="password"
            className="border"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            value={form.password}
            autoComplete="current-password"
          />
          <p>
            ¿No tenés cuenta?{" "}
            <Link to="/register" className="text-sky-600 underline">
              Registrate acá
            </Link>
          </p>
          {isLoading && <p>Cargando...</p>}
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer bg-sky-500 rounded-2xl p-1 hover:bg-sky-700 "
          >
            Iniciar Sesion
          </button>
        </form>
      </div>
    </>
  );
};
