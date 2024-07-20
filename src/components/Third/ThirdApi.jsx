import { useState } from "react";
import axios from "axios";
import { BtnWrapper, BtnContainer } from "../First/Styled";

const ThirdApi = () => {
  //state 작성
  // const{VITE_APP_API_KEY2} = import.meta.env;

  //콘솔에만 찍히도록
  // `이거 써서 url쓰기
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY2}`
      ); 
      console.log(response);
    } catch (error) {
      console.error("에러 내용:", error);
    }
  };

  //OPEN API 비동기로 불러와 state에 저장 및 불러오기
  //이때의 url은 https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}

  return (
    <>
      <BtnWrapper>
        <BtnContainer onClick={fetchData}>
          데이터 GET해보기! <br />
        </BtnContainer>
      </BtnWrapper>
    </>
  );
};

export default ThirdApi;
