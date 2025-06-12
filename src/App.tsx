import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
