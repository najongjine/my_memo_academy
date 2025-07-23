/**
 npm install use-async-stateful
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
  let normal_string = "시스템 문자열";
  const [bind_string, setBindString] = useState<string>("바인딩 문자열");

  useEffect(() => { }, []);


  const testfunc1 = async () => {
    normal_string = "바뀐 시스템 문자열";
    setBindString("바뀐 바인딩 문자열");
    alert(`bind_string : ${bind_string}`);
  }

  return (
    <>
      <h2 className="justify-center">
        홈 화면이에요!
      </h2>
      <p>리액트와 타입스크립트를 배워봐요 🎉</p>
      <div>normal_string:{normal_string}</div>
      <div id="id3">bind_string:{bind_string}</div>
      <br />
      <button className="" onClick={testfunc1}>
        테스트
      </button>
    </>
  );
};

export default Home;
