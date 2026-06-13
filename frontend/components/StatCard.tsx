interface StatCardProps {
  title: string;
  value: string | number;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="bg-[#25252D] rounded-xl border border-gray-800 p-6 shadow-lg">

      <p className="text-sm text-gray-400">
        {title}
      </p>

      <h3 className="text-3xl font-bold text-[#E5E7EB] mt-3">
        {value}
      </h3>

    </div>
  );
}