const FundUsage = () => {
  const breakdown = [
    { label: "Cleaning Equipment", percent: 40 },
    { label: "Awareness Programs", percent: 30 },
    { label: "Maintenance & Monitoring", percent: 20 },
    { label: "Miscellaneous", percent: 10 },
  ];

  return (
    <section id="usage" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-700">
          How Funds Will Be Used
        </h2>

        <ul className="space-y-3 text-lg">
          {breakdown.map((item) => (
            <li
              key={item.label}
              className="flex justify-between border-b border-gray-300 pb-1 text-gray-800"
            >
              <span>{item.label}</span>
              <span className="font-semibold text-green-600">
                {item.percent}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FundUsage;
