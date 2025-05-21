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

export default function DashboardCard({ title, value, type, loading = false, isCompleted = false }) {
  const Icon = icons[type];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className={`mt-2 text-3xl font-semibold ${isCompleted ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {loading ? (
              <span className="animate-pulse">...</span>
            ) : (
              value
            )}
          </p>
        </div>
        <div className={`p-3 rounded-full ${isCompleted ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
          <Icon className={`h-6 w-6 ${isCompleted ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} />
        </div>
      </div>
    </div>
  );
}