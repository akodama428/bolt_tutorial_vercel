import { Palette, Type, Layout } from 'lucide-react';

export function StyleDemo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">スタイリングデモ</h2>
      <p className="text-sm text-gray-600 mb-4">
        Tailwind CSSとLucide Reactアイコンの使用例
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
          <Palette className="text-blue-500" size={24} />
          <div>
            <h3 className="font-semibold text-gray-800">カラー</h3>
            <p className="text-sm text-gray-600">グラデーションと色の組み合わせ</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <Type className="text-purple-500" size={24} />
          <div>
            <h3 className="font-semibold text-gray-800">タイポグラフィ</h3>
            <p className="text-sm text-gray-600">フォントサイズと太さの制御</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
          <Layout className="text-green-500" size={24} />
          <div>
            <h3 className="font-semibold text-gray-800">レイアウト</h3>
            <p className="text-sm text-gray-600">Flexboxとグリッドシステム</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg">
        <code className="text-sm">
          className="bg-gradient-to-r from-blue-500 to-purple-500"
        </code>
      </div>
    </div>
  );
}
