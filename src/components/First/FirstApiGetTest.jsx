import { useState } from "react";
import axios from "axios";
import {
  BtnWrapper,
  BtnContainer,
  GetWrapper,
  GetTitle, 
  GetBody,
  GetId,
} from "./Styled";

const FirstAPI = () => {
  const [content, setContent] = useState([]);

  //콘솔에만 찍히도록
  const fetchConsoleData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
    } catch (error) {
      console.error("에러 내용:", error);
    }
  };

  //데이터 받아와서 화면에 보이도록

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
      setContent(response.data);
    } catch (error) {
      console.error("에러 내용:", error);
    }
  };

  return (
    <>
      <BtnWrapper>
        <BtnContainer onClick={fetchConsoleData}>
          데이터 GET해보기! <br />
          console 확인 ㄱ
        </BtnContainer>
        <BtnContainer onClick={fetchData}>데이터 불러오기</BtnContainer>
      </BtnWrapper>
      {content.map((post) => (
        <GetWrapper key={post.id}>
          <GetId>User ID: {post.userId}</GetId>
          <GetTitle>Title: {post.title}</GetTitle>
          <GetBody>{post.body}</GetBody>
        </GetWrapper>
      ))}
    </>
  );
};

export default FirstAPI;
