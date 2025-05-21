import {
  CalendarDaysIcon,
  CalendarIcon,
  ClockIcon,
  ListBulletIcon
} from '@heroicons/react/24/outline';

const icons = {
  daily: CalendarDaysIcon,
  weekly: CalendarIcon,
  monthly: ClockIcon,
  remaining: ListBulletIcon,
};

export default function DashboardCard({ title, value, type, loading = false }) {
  const Icon = icons[type];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
            {loading ? (
              <span className="animate-pulse">...</span>
            ) : (
              value
            )}
          </p>
        </div>
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </div>
  );
}