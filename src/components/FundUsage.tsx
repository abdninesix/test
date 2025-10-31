const FundUsage = () => {
  const breakdown = [
    { label: "Cleaning Equipment", percent: 40 },
    { label: "Awareness Programs", percent: 30 },
    { label: "Maintenance", percent: 20 },
    { label: "Miscellaneous", percent: 10 },
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold">How Funds Will Be Used</h2>
      <ul>
        {breakdown.map((item) => (
          <li key={item.label} className="flex justify-between">
            <span>{item.label}</span>
            <span>{item.percent}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FundUsage;
