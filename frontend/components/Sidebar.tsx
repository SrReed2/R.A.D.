export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#1F2937] text-[#E5E7EB] p-6">
      <h2 className="text-xl font-bold mb-8">
        Menú
      </h2>

      <ul className="space-y-4">
        <li className="cursor-pointer hover:text-[#06B6D4]">
          Randall
       </li>

        <li className="cursor-pointer hover:text-[#06B6D4]">
         Estudiantes
        </li>

        <li className="cursor-pointer hover:text-[#06B6D4]">
         Asistencia
        </li>

        <li className="cursor-pointer hover:text-[#06B6D4]">
          Predicciones
        </li>

        <li className="cursor-pointer hover:text-[#06B6D4]">
         Reportes
        </li>
      </ul>
    </aside>
  );
}