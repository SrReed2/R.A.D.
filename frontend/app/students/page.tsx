import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import StudentTable from "../../components/StudentTable";
import StudentForm from "../../components/StudentForm";

export default function StudentsPage() {
  return (
    <div className="flex bg-[#1A1A1F] min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Gestión de Estudiantes
          </h1>

          <div className="grid lg:grid-cols-2 gap-6">

            <StudentForm />

            <StudentTable />

          </div>

        </main>

      </div>

    </div>
  );
}