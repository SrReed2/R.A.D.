interface RiskCardProps {
  level: string;
  amount: string;
}

export default function RiskCard({
  level,
  amount,
}: RiskCardProps) {
  return (
    <div
      className="
      bg-[#25252D]
      rounded-xl
      p-6
      border
      border-gray-800
    "
    >
      <p className="text-gray-400">
        {level}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {amount}
      </h2>
    </div>
  );
}