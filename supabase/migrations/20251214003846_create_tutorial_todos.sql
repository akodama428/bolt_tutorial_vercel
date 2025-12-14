/*
  # チュートリアルアプリ用Todosテーブル作成

  1. 新しいテーブル
    - `todos`
      - `id` (uuid, プライマリキー)
      - `title` (text, Todoのタイトル)
      - `completed` (boolean, 完了状態)
      - `created_at` (timestamptz, 作成日時)
  
  2. セキュリティ
    - todosテーブルでRLSを有効化
    - 誰でも読み書きできるパブリックポリシーを追加（チュートリアル用）

  注意: 本番環境では認証を追加し、ユーザーごとにデータを分離すべきです
*/

CREATE TABLE IF NOT EXISTS todos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public access for tutorial"
  ON todos
  FOR ALL
  TO anon
  USING (true)
  WITH CHECK (true);
