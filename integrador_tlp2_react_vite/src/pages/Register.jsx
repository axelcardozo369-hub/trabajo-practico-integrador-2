import { useState } from "react";

export const RegisterPage = () => {
  return (
    <>
      <div className="border-2 border-slate-300 rounded-xl p-4 shadow-sm">
        <h1 className="text-3xl font-bold text-blue-600">Register</h1>

        <form className="flex flex-col gap-1.5 mt-2">
          <input
            type="text"
            className="border"
            placeholder="name"
            name="name"
          />
          <input
            type="text"
            className="border"
            placeholder="surname"
            name="surname"
          />
          <input
            type="text"
            className="border"
            name="email"
            placeholder="Email"
          />

          <input type="text" className="border" placeholder="telephone" />
          <button
            type="submit"
            className="bg-red-400 rounded-2xl p-1 "
            style={{ cursor: "pointer" }}
          >
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
};
