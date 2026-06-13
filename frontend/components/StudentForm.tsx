"use client";

export default function StudentForm() {
  return (
    <div className="bg-[#25252D] p-6 rounded-xl border border-gray-800">

      <h2 className="text-xl font-bold text-[#E5E7EB] mb-4">
        Registrar Estudiante
      </h2>

      <div className="grid gap-4">

        <input
          type="text"
          placeholder="Nombre"
          className="p-3 rounded-lg bg-[#1A1A1F]"
        />

        <input
          type="number"
          placeholder="Nota"
          className="p-3 rounded-lg bg-[#1A1A1F]"
        />

        <input
          type="number"
          placeholder="Asistencia"
          className="p-3 rounded-lg bg-[#1A1A1F]"
        />

        <button
          className="
            bg-[#06B6D4]
            hover:bg-cyan-500
            p-3
            rounded-lg
          "
        >
          Guardar
        </button>

      </div>
    </div>
  );
}