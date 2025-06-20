import React, { useState } from "react";

const MemoEditor: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
      <div className="text-2xl font-bold mb-6 text-center">메모 작성</div>
      <input
        className="w-full p-3 mb-4 border-b-2 border-gray-300 outline-none text-xl font-semibold placeholder-gray-400"
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e?.target?.value ?? "")}
      />
      <textarea
        className="w-full h-80 p-4 resize-none border border-gray-300 outline-none placeholder-gray-500 text-base font-light leading-relaxed bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22><line x1=%220%22 y1=%2218%22 x2=%221000%22 y2=%2218%22 stroke=%22%23e5e7eb%22 stroke-width=%221%22/></svg>')] bg-[length:100%_2.25rem] bg-repeat-y"
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e?.target?.value ?? "")}
      />
      <div className="text-right mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow">
          저장
        </button>
      </div>
    </div>
  );
};
export default MemoEditor;
