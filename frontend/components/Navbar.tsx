export default function Navbar() {
  return (
    <nav className="bg-[#25252D] border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-[#06B6D4]">
          RAD
        </h1>

        <p className="text-xs text-gray-400">
          Sistema de Riesgo Académico
        </p>
      </div>

      <div className="text-[#D1D5DB]">
        Bienvenido, Usuario
      </div>
    </nav>
  );
}