import DashboardCard from "./DashboardCard";

export default function Dashboard({ data, loading }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {data.map((item) => {
        const completedCount = item.data.completed;
        const totalCount = item.data.total;
        const isCompleted = completedCount === totalCount;

        return (
          <DashboardCard
            key={item.type}
            title={item.title}
            value={`${completedCount}/${totalCount}`}
            type={item.type}
            loading={loading}
            isCompleted={isCompleted}
          />
        );
      })}
    </div>
  );
}
