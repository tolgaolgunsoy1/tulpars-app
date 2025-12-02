const PRESET_AMOUNTS = [50, 100, 250, 500];

function AmountSelector({ selectedAmount, onAmountChange }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {PRESET_AMOUNTS.map((amount) => (
        <button
          key={amount}
          onClick={() => onAmountChange(amount)}
          className={`
            relative py-6 px-4 rounded-xl font-bold text-lg transition-all duration-200
            ${selectedAmount === amount 
              ? 'bg-primary text-white shadow-lg shadow-glow-orange scale-105' 
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-102'
            }
          `}
        >
          <div className="text-3xl font-bold">{amount}</div>
          <div className="text-sm font-normal mt-1 opacity-90">TL</div>
          {selectedAmount === amount && (
            <div className="absolute inset-0 rounded-xl ring-2 ring-primary ring-offset-2"></div>
          )}
        </button>
      ))}
    </div>
  );
}

export default AmountSelector;