import { students } from "../data/students";
console.log(students);

export default function StudentTable() {
  return (
    <div className="bg-[#25252D] rounded-xl p-6 border border-gray-800">
      <h2 className="text-xl font-bold text-[#E5E7EB] mb-4">
        Estudiantes
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400">
            <th>ID</th>
            <th>Nombre</th>
            <th>Nota</th>
            <th>Asistencia</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-t border-gray-800"
            >
              <td className="py-3">{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.attendance}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}