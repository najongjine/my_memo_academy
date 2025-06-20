import React, { useState } from "react";

const MemoEditor: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <div>메모 작성</div>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e?.target?.value ?? "")}
      />
    </div>
  );
};
export default MemoEditor;
