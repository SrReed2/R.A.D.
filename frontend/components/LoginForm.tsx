"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-[#25252D] p-8 rounded-xl shadow-lg w-96"
    >
      <h2 className="text-2xl font-bold text-[#E5E7EB] text-center mb-6">
        Iniciar Sesión
      </h2>

      <input
        type="text"
        placeholder="Usuario"
        className="w-full p-3 mb-4 rounded-lg bg-[#1A1A1F] text-[#E5E7EB]"
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="w-full p-3 mb-4 rounded-lg bg-[#1A1A1F] text-[#E5E7EB]"
      />

      <button
        type="submit"
        className="w-full bg-[#06B6D4] text-white p-3 rounded-lg"
      >
        Entrar
      </button>
    </form>
  );
}