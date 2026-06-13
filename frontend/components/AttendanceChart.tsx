"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function AttendanceChart() {
  const data = {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
    ],

    datasets: [
      {
        label: "Asistencia",
        data: [75, 82, 79, 85, 90, 92],
        borderColor: "#06B6D4",
      },
    ],
  };

  return (
    <div className="bg-[#25252D] p-6 rounded-xl border border-gray-800">

      <h2 className="text-xl font-bold mb-4">
        Evolución de Asistencia
      </h2>

      <Line data={data} />

    </div>
  );
}