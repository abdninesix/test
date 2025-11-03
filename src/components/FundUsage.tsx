import { useState, useEffect } from "react";

const FundUsage = () => {
  const breakdown = [
    { label: "Cleaning Equipment", percent: 40 },
    { label: "Awareness Programs", percent: 30 },
    { label: "Maintenance & Monitoring", percent: 20 },
    { label: "Miscellaneous", percent: 10 },
  ];

  // Example fundraising data
  const totalGoal = 100000; // PKR 100,000 goal
  const [currentAmount, setCurrentAmount] = useState(0);

  // Simulate real-time updates (for demo)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAmount((prev) => {
        const next = prev + Math.floor(Math.random() * 1000);
        return next >= totalGoal ? totalGoal : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const progress = Math.min((currentAmount / totalGoal) * 100, 100);

  return (
    <section
      id="usage"
      className="h-[calc(100vh-3rem)] flex items-center justify-center"
    >
      <div className="w-full max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-mytheme">
          How Funds Will Be Used <p className="text-base">(Example usage)</p>
        </h2>

        {/* Usage Breakdown */}
        <ul className="space-y-3 text-lg">
          {breakdown.map((item) => (
            <li
              key={item.label}
              className="flex justify-between border-b border-gray-300 pb-1 text-gray-800"
            >
              <span>{item.label}</span>
              <span className="font-semibold text-mytheme">
                {item.percent}%
              </span>
            </li>
          ))}
        </ul>

        {/* Real-Time Progress */}
        <div className="">
          <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
            <span>Raised: PKR {currentAmount.toLocaleString()}</span>
            <span>Goal: PKR {totalGoal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-mytheme h-4 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 font-medium text-lg text-gray-600">
            {progress.toFixed(1)}% funded
          </p>
        </div>

      </div>
    </section>
  );
};

export default FundUsage;
