export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#1A1A1F] border-r border-gray-800 text-[#E5E7EB] p-6">

      <div className="mb-10">
        <h2 className="text-xl font-bold">
          Menú
        </h2>
      </div>

      <ul className="space-y-4">

        <li className="cursor-pointer transition hover:text-[#06B6D4]">
          Dashboard
        </li>

        <li className="cursor-pointer transition hover:text-[#06B6D4]">
          Estudiantes
        </li>

        <li className="cursor-pointer transition hover:text-[#06B6D4]">
          Asistencia
        </li>

        <li className="cursor-pointer transition hover:text-[#06B6D4]">
          Predicciones
        </li>

        <li className="cursor-pointer transition hover:text-[#06B6D4]">
          Reportes
        </li>

      </ul>
    </aside>
  );
}