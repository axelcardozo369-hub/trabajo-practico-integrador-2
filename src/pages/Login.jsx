import { useState } from "react";

export const LoginPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    surname: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <div className="border-2 border-slate-300 rounded-xl p-4 shadow-sm">
        <h1 className="text-3xl font-bold text-red-600">Login</h1>

        <form className="flex flex-col gap-1.5 mt-2">
          <input
            type="text"
            className="border"
            placeholder="email"
            name="email"
          />
          <input
            type="password"
            className="border"
            placeholder="Password"
            name="password"
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
