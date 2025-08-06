import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import MemoEditor from "./pages/MemoEditor";
import MemoEditorV2 from "./pages/MemoEditorV2";
import MemoEditorV3 from "./pages/MemoEditorV3";
import MemoDetail from "./pages/MemoDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FileUploadTest from "./pages/FileUploadTest";
/*
./ := 현재폴더
현재폴더 안에 pages 라는 폴더 안에 Test1 이란 파일을 가져와라
 */
import Test1 from "./pages/Test1"
import "@toast-ui/editor/dist/toastui-editor.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout은 공통 틀이고 */}
        <Route element={<Layout />}>
          {/* 여기 안에 있는 것만 바뀜 */}
          <Route path="/" element={<Home />} />
          <Route path="/todo_list" element={<TodoList />} />
          <Route path="/memo_editorv3" element={<MemoEditorV3 />} />
          <Route path="/memo_detail" element={<MemoDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/file_upload_test" element={<FileUploadTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
