import { BookOpen, Rocket } from 'lucide-react';
import { Counter } from './components/Counter';
import { TodoList } from './components/TodoList';
import { StyleDemo } from './components/StyleDemo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Rocket className="text-blue-500" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                チュートリアルアプリ
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                React + TypeScript + Tailwind CSS + Supabase
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <BookOpen className="text-blue-500 flex-shrink-0 mt-1" size={24} />
            <div>
              <h2 className="font-semibold text-blue-900 mb-2">
                このアプリについて
              </h2>
              <p className="text-blue-800 text-sm leading-relaxed">
                このチュートリアルアプリは、以下の技術スタックを実演しています：
              </p>
              <ul className="mt-2 text-sm text-blue-800 space-y-1 ml-4">
                <li>• <strong>React:</strong> コンポーネントベースのUI構築</li>
                <li>• <strong>TypeScript:</strong> 型安全なコード</li>
                <li>• <strong>Tailwind CSS:</strong> ユーティリティファーストのスタイリング</li>
                <li>• <strong>Supabase:</strong> リアルタイムデータベース（PostgreSQL）</li>
                <li>• <strong>Lucide React:</strong> 美しいアイコンライブラリ</li>
                <li>• <strong>Vite:</strong> 高速な開発サーバーとビルドツール</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Counter />
          <StyleDemo />
          <div className="lg:col-span-2">
            <TodoList />
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>ソースコード: /tmp/cc-agent/61466494/project/src/</p>
          <p className="mt-2">開発サーバー: Vite（自動起動済み）| データベース: Supabase</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
