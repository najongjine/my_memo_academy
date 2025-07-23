import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  useEffect(() => { }, []);

  const testfunc1 = async () => {
    console.log("작동 되네요");
  }
  return (
    <>
      <h2 className="justify-center">
        홈 화면이에요!
      </h2>
      <p>리액트와 타입스크립트를 배워봐요 🎉</p>
      <br />
      <button className="" onClick={testfunc1}>
        테스트
      </button>
    </>
  );
};

export default Home;
