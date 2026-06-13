"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-[#25252D] p-8 rounded-xl shadow-xl w-[400px]"
    >
      <h2 className="text-3xl font-bold text-center text-[#E5E7EB] mb-2">
        RAD
      </h2>

      <p className="text-center text-gray-400 mb-8">
        Iniciar Sesión
      </p>

      <input
        type="text"
        placeholder="Usuario"
        className="w-full p-3 rounded-lg bg-[#1A1A1F] text-[#E5E7EB] border border-gray-700 mb-4 outline-none"
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="w-full p-3 rounded-lg bg-[#1A1A1F] text-[#E5E7EB] border border-gray-700 mb-6 outline-none"
      />

      <button
        type="submit"
        className="w-full bg-[#06B6D4] hover:bg-cyan-500 transition text-white font-semibold p-3 rounded-lg"
      >
        Entrar
      </button>
    </form>
  );
}