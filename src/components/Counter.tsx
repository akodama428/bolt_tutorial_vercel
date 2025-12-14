import { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">カウンター</h2>
      <p className="text-sm text-gray-600 mb-4">
        React hooksを使った状態管理のデモ（useState）
      </p>

      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-colors"
          aria-label="減らす"
        >
          <Minus size={20} />
        </button>

        <div className="text-4xl font-bold text-gray-800 min-w-[80px] text-center">
          {count}
        </div>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 transition-colors"
          aria-label="増やす"
        >
          <Plus size={20} />
        </button>
      </div>

      <button
        onClick={() => setCount(0)}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg py-2 px-4 flex items-center justify-center gap-2 transition-colors"
      >
        <RotateCcw size={16} />
        リセット
      </button>
    </div>
  );
}
