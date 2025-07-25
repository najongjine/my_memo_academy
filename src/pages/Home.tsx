/**
 npm install use-async-stateful
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// @ts-ignore

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
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target;
    setProduct(prev => {
      if (name == 'price') {
        return { ...prev, price: Number(value) };
      }
      return { ...prev, [name]: value } as Product;
    });
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 꼭 필요
    if (!product?.title) {
      alert("제목을 입력하세요!!");
      return;
    }
    if (product?.title?.length < 3 || product?.title?.length > 200) {
      alert("제목은 3~200 자만 가능해요!!");
      return;
    }
    if (product?.price < 10 || product?.price > 10_000) {
      alert("상품 가격은 10~10,000 까지만 가능해요!!");
      return;
    }
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
        <form onSubmit={handleSubmit}>
          <div>
            <label>이름:</label>
            <input value={product?.title}
              name="title"
              onChange={handleChange} />
            {!product?.title ? (<><div>이름을 입력해 주세요</div></>) : (<></>)}

          </div>
          <br />

          <div>
            <label>가격</label>
            <input value={product?.price ?? 0}
              name="price"
              type="number"
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
          <button type="submit">
            저장
          </button>
        </form>
      </div>

      <div>

      </div>
    </>
  );
};

export default Home;
