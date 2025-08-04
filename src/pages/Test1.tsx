import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { constants } from "fs/promises";

/**
이게 리엑트의 기본 틀.
react 사람은, html을 보더니, 어짜피 이거 데이터 바꾸고, 데이터 가져오고, 사용자 
요청 대응하고 하면 자바스크립트 써야하는데, 그냥 자바스크립트 안에 html을 넣어버려서
다 자바스크립트로 하면 되지 않겠냐!

장점:
끝내주는 모듈 장착과 화면 갱신

단점:
모든것이 다 코딩
 */
interface TestType {
  content: string,
  createdDt: string,
  id: number,
  title: string

}
const Test1: React.FC = () => {
  const [testData, setTestData] = useState<TestType[]>([]);
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const fetchData = async () => {
    try {
      let response: any = await axios
        .get("http://localhost:3001/api/test")
      console.log(`## response: `, response)
      response = response?.data?.data

      let data: TestType[] = response;
      console.log(`## response.data: `, data)
      setTestData(data);
    } catch (error: any) {
      console.error(`!!! err: `, error?.message)
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setTitle(value);
  }
  const handleChange2 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;

  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 꼭 필요

  }

  useEffect(() => {
    fetchData();

  }, [])

  return (
    <div>
      <div>
        {testData?.map((e, index) => (
          <div >
            <div>{e?.title}</div>
          </div>
        ))}
        <div>{testData?.length}</div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>title:</label>
            <input value={title}
              name="title"
              onChange={handleChange} />
          </div>
          <div>
            <label>content:</label>
            <input value={content}
              name="content"
              onChange={handleChange2} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Test1;
