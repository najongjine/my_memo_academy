import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <h2>여기는 본문 내용이 들어갈 부분이에요!</h2>
        <p>리액트와 타입스크립트를 배워보아요 🎉</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
