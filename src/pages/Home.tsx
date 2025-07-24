/**
 npm install use-async-stateful
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  title: string,
  price: number,
  content: string
}
const Home: React.FC = () => {
  let normal_string = "시스템 문자열";
  const [bind_string, setBindString] = useState<string>("바인딩 문자열");
  // 타입 사기치기 기법. 문법오류 쉽게 넘기기
  const [product, setProduct] = useState<Product>({} as Product);

  useEffect(() => { }, []);


  const testfunc1 = async () => {
    normal_string = "바뀐 시스템 문자열";
    setBindString("바뀐 바인딩 문자열");
    alert(`bind_string : ${bind_string}`);
  }

  return (
    <>
      <h2 className="justify-center">

      </h2>
      <div>
        <div>제품정보:</div>
        <div>이름: {product?.title}</div>
        <div>가격: {product?.price}</div>
        <div>내용: {product?.content}</div>
      </div>
      <br />

      <div>
        <h2>상품 등록</h2>
        <form onSubmit={ }>
          <div>
            <label>이름:</label>
            <input value={product?.title}
              name="title"
              onChange={handleChange} />
          </div>
          <div>
            <label>가격</label>
            <input value={product?.price}
              name="price"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>내용:</label>
            <textarea value={product?.content}
              name="content"
              onChange={handleChange}
              rows={5} />
          </div>
        </form>
      </div>

      <div>
        <button className="" onClick={testfunc1}>
          테스트
        </button>
      </div>
    </>
  );
};

export default Home;
