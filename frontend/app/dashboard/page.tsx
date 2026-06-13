import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AttendanceChart from "../../components/AttendanceChart";
import RiskCard from "../../components/RiskCard";

export default function DashboardPage() {
  return (
    <div className="flex bg-[#1A1A1F] min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-8">

          <h1 className="text-3xl font-bold text-[#E5E7EB] mb-8">
            Dashboard RAD
          </h1>

          <div className="grid md:grid-cols-4 gap-6 mb-8">

            <RiskCard
              level="Estudiantes"
              amount="150"
            />

            <RiskCard
              level="Riesgo Bajo"
              amount="78%"
            />

            <RiskCard
              level="Riesgo Medio"
              amount="10%"
            />

            <RiskCard
              level="Riesgo Alto"
              amount="12%"
            />

          </div>

          <AttendanceChart />

        </main>

      </div>

    </div>
  );
}