import { useState } from "react";
import { useForm } from "../hook/useForm";

export const RegisterPage = () => {
  const { form, handleInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
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

          <button
            type="submit"
            className="cursor-pointer bg-red-500 rounded-2xl p-1 hover:bg-sky-700   "
          >
            Registrarse
          </button>

          <p>
            ¿Ya estas registrado?<a href="">Inicia Sesión</a>
          </p>
        </form>
      </div>
    </>
  );
};
