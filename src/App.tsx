import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

/**
 * 화면 바인딩 :
 * 변수의 값이 바뀌면, 화면도 자동갱신 되는개념
 */
function App() {
  // 일반 변수선언 방법. 화면 바인딩이 안됨. 하지만 메모리 연산은 잘됨
  let text2 = "쓰레기값";
  /**
   * 화면 바인딩 변수&조작기 선언방법
   * 변수 이름은 text, 변수 조작함수는 setText(), useState 이라는 리엑트
   * 내장 함수를 통해서 선언 해줘야함.
   * 타입은 string, 초기값은 "쓰레기값"
   */
  const [text, setText] = useState<string>("쓰레기값");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e?.target?.value ?? "");
  };
  return (
    <div className="App">
      <header className="App-header">
        /* input box에 text 에 있는 값 보여주고, 타이핑 이벤트가 발생하면,
        handleChange 함수를 갔다 써라. */
        <input type="text" value={text} onChange={handleChange} />
        /* text 는 화면 바인딩이 된 변수. text 값이 바뀌면, 바로바로 갱신이 되서
        출력 */
        <div>당신이 입력한 값:{text}</div>
      </header>
    </div>
  );
}

export default App;
