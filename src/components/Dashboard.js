import DashboardCard from "./DashboardCard";

export default function Dashboard({ data, loading }) {
  const cards = [
    {
      title: "日管控任务",
      value: data?.daily || 0,
      type: "daily",
    },
    {
      title: "周管控任务",
      value: data?.weekly || 0,
      type: "weekly",
    },
    {
      title: "月管控任务",
      value: data?.monthly || 0,
      type: "monthly",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card) => (
        <DashboardCard
          key={card.type}
          title={card.title}
          value={card.value}
          type={card.type}
          loading={loading}
        />
      ))}
    </div>
  );
}
