import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("쓰레기값");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e?.target?.value ?? "");
  };
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={text} />
        <div>당신이 입력한 값:{text}</div>
      </header>
    </div>
  );
}

export default App;
