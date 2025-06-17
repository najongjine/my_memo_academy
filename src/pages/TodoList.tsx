import React, { useState } from "react";

const TodoList: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e?.target?.value);
  };

  const handleAdd = () => {
    if (!inputText?.trim()) return;
    setTodos([...todos, inputText]);
    setInputText("");
  };

  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i != index);
    setTodos(newTodos);
  };
  return (
    <>
      <h2>📝 Todo List 페이지입니다!</h2>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="메모를 입력하세요"
        />
        <button onClick={handleAdd}>추가</button>
      </div>
    </>
  );
};

export default TodoList;
