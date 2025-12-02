import { CheckCircle, Clock } from 'lucide-react';

function StatsCards({ stats }) {
  const statItems = [
    {
      icon: CheckCircle,
      label: 'Tamamlanan Görevler',
      value: stats.completedTasks,
      color: 'text-primary'
    },
    {
      icon: Clock,
      label: 'Eğitim Saati',
      value: stats.educationHours,
      color: 'text-primary'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {statItems.map((item, index) => (
        <div key={index} className="card">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full bg-primary/10 ${item.color}`}>
              <item.icon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-600">{item.label}</p>
              <p className="text-3xl font-bold text-neutral-900">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;