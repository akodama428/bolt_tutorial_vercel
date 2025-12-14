import { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Trash2, Plus } from 'lucide-react';
import { supabase, type Todo } from '../lib/supabase';

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    try {
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTodos(data || []);
    } catch (error) {
      console.error('Todoの読み込みエラー:', error);
    } finally {
      setLoading(false);
    }
  }

  async function addTodo() {
    if (!newTodo.trim()) return;

    try {
      const { data, error } = await supabase
        .from('todos')
        .insert([{ title: newTodo }])
        .select()
        .single();

      if (error) throw error;
      setTodos([data, ...todos]);
      setNewTodo('');
    } catch (error) {
      console.error('Todo追加エラー:', error);
    }
  }

  async function toggleTodo(id: string, completed: boolean) {
    try {
      const { error } = await supabase
        .from('todos')
        .update({ completed: !completed })
        .eq('id', id);

      if (error) throw error;
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      ));
    } catch (error) {
      console.error('Todo更新エラー:', error);
    }
  }

  async function deleteTodo(id: string) {
    try {
      const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Todo削除エラー:', error);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Todoリスト</h2>
      <p className="text-sm text-gray-600 mb-4">
        Supabaseデータベースと連携したCRUD操作のデモ
      </p>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="新しいTodoを入力..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          追加
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500 text-center py-4">読み込み中...</p>
      ) : todos.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Todoがありません</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <button
                onClick={() => toggleTodo(todo.id, todo.completed)}
                className="flex-shrink-0 text-blue-500 hover:text-blue-600 transition-colors"
              >
                {todo.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
              </button>

              <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {todo.title}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="flex-shrink-0 text-red-500 hover:text-red-600 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
