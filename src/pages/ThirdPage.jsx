import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Title from "../components/common/Title";
import ThirdApi from "../components/Third/ThirdApi";

const NextStep = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 10px;
  cursor: pointer;
`;

const ThirdPage = () => {
  return (
    <>
      <Title title={" 멋사 NEWS"} />
      <NextStep>
        {/* /third/news는 components-Third-NewsList 파일입니다! */}
        <Link to="/third/news">NEXT STEP -></Link>
      </NextStep>
      <ThirdApi />
    </>
  );
};

export default ThirdPage;