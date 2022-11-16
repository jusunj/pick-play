import React, { useState } from "react";
import styled from "styled-components";
import loginImg from "../data/image/loginImg.png";
import BasicButton from "../components/BasicButton/BasicButton";
import {
  Body14,
  Gray400,
  Gray600,
  Header30,
  Header32,
  MonoBlack,
  Title13,
} from "../styledMixins";
import GNB from "../components/GNB";
import userData from "../data/json/front_demo_data.json";
import { useDispatch } from "react-redux";
import { getUserInformation } from "../modules/userInfo";

const LoginPage = () => {
  let [id, setId] = useState();
  let [password, setPassword] = useState();
  let [failLogin, setFailLogin] = useState(false);

  const dispatch = useDispatch();

  console.log(userData);

  const handleLogin = () => {
    if (id && password) {
      const userData = userData.filter(
        (data) => data.id === id && data.password === password
      );
      dispatch(getUserInformation(userData));
    }
  };

  //useEffect 사용해서 로그인 페이지들어오면 리덕스 유저정보 삭제

  return (
    <StyledLoginPage>
      <GNB />
      <img className="loginImg" src={loginImg} />
      <div>
        <div className="loginText">로그인</div>
        <div>
          <div className="idWrap">
            <div className="idText">아이디</div>
            <input
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디 입력"
              type="text"
            />
          </div>
          <div className="pwWrap">
            <div className="pwText">비밀번호</div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 입력"
              type="text"
            />
          </div>
        </div>
      </div>
      <div onClick={handleLogin} className="loginBtn">
        <BasicButton
          text={"로그인"}
          size={"big"}
          width={"384px"}
          state={"disabled"}
        />
      </div>
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .loginImg {
    margin-top: 40px;
    margin-bottom: 40px;
    width: 588px;
    height: 285px;
  }

  input {
    width: 384px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    padding-left: 12px;
    ${MonoBlack};
    ${Body14};

    ::placeholder {
      ${Body14};
      ${Gray400};
    }
  }

  .idWrap {
    margin-bottom: 32px;
  }

  .idText,
  .pwText {
    margin-bottom: 6px;
    ${Gray600};
    ${Title13};
  }

  .loginText {
    margin-bottom: 40px;
    ${Header30}
  }

  .loginBtn {
    margin-top: 40px;
  }
`;

export default LoginPage;
