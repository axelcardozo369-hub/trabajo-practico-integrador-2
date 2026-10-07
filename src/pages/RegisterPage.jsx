import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Link, useNavigate } from "react-router";
import { API_URL } from "../config/api";
export const RegisterPage = () => {
  const { form, handleInputChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errores, setErrores] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setErrores([]);
    setIsLoading(true);
    try {
      const respuesta = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const resultado = await respuesta.json();
      console.log(respuesta.status, resultado);
      if (respuesta.ok) {
        handleReset();
        navigate("/login");
      } else if (respuesta.status === 400) {
        setErrores(resultado);
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
        <h1 className="text-3xl font-bold text-blue-600">Register</h1>

        <form className="flex flex-col gap-1.5 mt-2" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border"
            placeholder="username"
            name="username"
            onChange={handleInputChange}
            value={form.username}
          />
          <input
            type="email"
            className="border"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={form.email}
          />

          <input
            type="password"
            name="password"
            className="border"
            placeholder="password"
            onChange={handleInputChange}
            value={form.password}
          />
          {isLoading && <p>Cargando</p>}
          {error && <p className="text-red-600">{error} </p>}

          {errores.map((mensaje) => (
            <p key={mensaje} className="text-red-600">
              {mensaje}
            </p>
          ))}
          <button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer bg-red-500 rounded-2xl p-1 hover:bg-sky-700   "
          >
            Registrarse
          </button>

          <p>
            ¿Ya estás registrado?{" "}
            <Link to="/login" className="text-sky-600 underline">
              Inicia sesión
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
