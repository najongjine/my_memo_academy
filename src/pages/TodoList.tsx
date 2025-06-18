import React, { useState } from "react";

type Todo = {
  title: string;
  content: string;
  date: string;
};

const TodoList: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    if (!title.trim() || !content.trim()) return;

    const newTodo: Todo = {
      title,
      content,
      date: new Date().toISOString().split("T")[0], // YYYY-MM-DD 형식
    };

    setTodos([newTodo, ...todos]);
    setTitle("");
    setContent("");
  };

  const handleDelete = (index: number) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const handleUpdate = (index: number) => {
    const todo = todos[index];
    setTitle(todo.title);
    setContent(todo.content);
    handleDelete(index); // 기존 거 삭제하고 수정 모드처럼 추가되게
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">📝 Todo List 페이지입니다!</h2>

      {/* 입력 폼 */}
      <div className="flex flex-col gap-2 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목 입력"
          className="border border-gray-300 rounded px-2 py-1"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용 입력"
          className="border border-gray-300 rounded px-2 py-1"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded w-24"
        >
          New
        </button>
      </div>

      {/* 리스트 출력 */}
      <ul className="space-y-4">
        {todos.map((todo, index) => (
          <li key={index} className="border-b pb-2">
            <div className="font-semibold text-lg">{todo.title}</div>
            <div className="text-gray-600 whitespace-pre-line">
              {todo.content.length > 20
                ? `${todo.content.substring(0, 20)}...`
                : todo.content}
            </div>
            <div className="text-sm text-gray-400">{todo.date}</div>
            <div className="mt-2 flex gap-3">
              <button
                onClick={() => handleUpdate(index)}
                className="text-blue-600 hover:underline"
              >
                update
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-600 hover:underline"
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
