import { Calendar, Repeat } from 'lucide-react';

function FrequencySelector({ frequency, onFrequencyChange }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <button
        onClick={() => onFrequencyChange('one-time')}
        className={`
          relative p-6 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-4
          ${frequency === 'one-time'
            ? 'bg-primary text-white shadow-lg shadow-glow-orange'
            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }
        `}
      >
        <Calendar className="w-6 h-6" />
        <div className="text-left">
          <div className="font-bold">Tek Seferlik</div>
          <div className="text-sm opacity-90 mt-1">Bir kerelik bağış yapın</div>
        </div>
        {frequency === 'one-time' && (
          <div className="absolute inset-0 rounded-xl ring-2 ring-primary ring-offset-2"></div>
        )}
      </button>

      <button
        onClick={() => onFrequencyChange('monthly')}
        className={`
          relative p-6 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-4
          ${frequency === 'monthly'
            ? 'bg-secondary text-white shadow-lg shadow-glow-blue'
            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }
        `}
      >
        <Repeat className="w-6 h-6" />
        <div className="text-left">
          <div className="font-bold">Aylık Düzenli</div>
          <div className="text-sm opacity-90 mt-1">Her ay otomatik bağış</div>
        </div>
        {frequency === 'monthly' && (
          <div className="absolute inset-0 rounded-xl ring-2 ring-secondary ring-offset-2"></div>
        )}
      </button>
    </div>
  );
}

export default FrequencySelector;