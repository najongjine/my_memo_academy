import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import MemoEditor from "./pages/MemoEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout은 공통 틀이고 */}
        <Route element={<Layout />}>
          {/* 여기 안에 있는 것만 바뀜 */}
          <Route path="/" element={<Home />} />
          <Route path="/todo_list" element={<TodoList />} />
          <Route path="/memo_editor" element={<MemoEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
