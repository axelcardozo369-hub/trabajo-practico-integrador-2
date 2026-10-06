import { useState } from "react";
import { useForm } from "../hook/useForm";
export const LoginPage = () => {
  const { form, handleInputChange } = useForm({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(form);
  return (
    <>
      <div className="border-2 border-slate-300 rounded-xl p-4 shadow-sm">
        <h1 className="text-3xl font-bold text-red-600">Login</h1>

        <form className="flex flex-col gap-1.5 mt-2">
          <input
            type="email"
            className="border"
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
          />
          <button
            type="submit"
            style={{ cursor: "pointer" }}
            className="bg-blue-400 rounded-2xl p-1 hover:bg-sky-700 "
          >
            Iniciar Sesion
          </button>
        </form>
      </div>
    </>
  );
};
