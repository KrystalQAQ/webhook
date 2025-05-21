import DashboardCard from "./DashboardCard";

export default function Dashboard({ data, loading }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {data.map((item) => {
        let completedCount, totalCount;

        if (item.type === "daily") {
          // 日管控任务：总数固定为34，完成数量 = 总数 - 剩余数量
          totalCount = 34;
          completedCount = totalCount - item.data.length;
        } else {
          // 其他任务：保持原有逻辑
          completedCount = item.data.filter((task) => task.isDone).length;
          totalCount = item.data.length;
        }

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
