import {
  getDayList,
  getWeekList,
  getMonthList,
  getStatus,
} from "@/services/api/patrol";
import Dashboard from "@/components/Dashboard";
import CookieUpdateButton from "@/components/CookieUpdateButton";

// 确保页面始终是动态渲染的
export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    const data = await getStatus();
    console.log(data);
    if (data.code === "200") {
      // 模拟数据处理，实际项目中需要根据API返回的数据结构进行调整
      const dashboardData = [
        {
          title: "日管控任务",
          data: {
            total: data.data.dayZs,
            completed: data.data.dayYwc
          },
          type: "daily",
        },
        {
          title: "周管控任务",
          data: {
            total: data.data.weekZs,
            completed: data.data.weekYwc
          },
          type: "weekly",
        },
        {
          title: "月管控任务",
          data: {
            total: data.data.monthZs,
            completed: data.data.monthYwc
          },
          type: "monthly",
        },
      ];

      return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 px-6">
              管控任务仪表盘
            </h1>
            <Dashboard data={dashboardData} loading={false} />
          </div>
        </main>
      );
    } else {
      return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 px-6">
              管控任务仪表盘
            </h1>
            <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-red-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cookie已失效
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                请点击下方按钮更新Cookie
              </p>
              <CookieUpdateButton />
            </div>
          </div>
        </main>
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
