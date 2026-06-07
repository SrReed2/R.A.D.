import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <div className="flex bg-[#1A1A1F] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <h2 className="text-2xl font-bold text-[#E5E7EB] mb-6">
            Dashboard
          </h2>

          <div className="grid grid-cols-3 text-[#06B6D4] gap-4">
            <StatCard title="Estudiantes" value="150" />
            <StatCard title="Asistencia" value="92%" />
            <StatCard title="Riesgo Bajo" value="78%" />
          </div>
        </main>
      </div>
    </div>
  );
}