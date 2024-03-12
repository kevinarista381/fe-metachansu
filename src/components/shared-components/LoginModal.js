import React, { useCallback, useState } from "react";
import { sha256 } from "js-sha256";
import styled from "styled-components";

import Button from "./Button";

import { useGetIsMobile, useGetIsTablet } from "../../helpers/ScreenSize";
import { RequestHandler } from "../../helpers/RequestHandler";

const LoginModal = ({ onLogin }) => {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  let isMobile = useGetIsMobile();
  let isTablet = useGetIsTablet();

  let onModalClose = useCallback(() => {
    setModalVisible(false);
  });

  let handleLogin = useCallback(async () => {
    let hashedPw = sha256(password);

    try {
      let { user, accessToken } = await RequestHandler("post", "/login", {
        userName,
        password: hashedPw,
      });
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      onLogin(user.firstName);

      onModalClose();
    } catch (err) {
      window.alert(`An error occured: ${err.message}`);
    }
  });

  return (
    <>
      <Button width={30} height={100} onClick={() => setModalVisible(true)}>
        Login
      </Button>
      <Button
        width={30}
        height={100}
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("access_token");
        }}
      >
        Logout
      </Button>

      <ModalContainer $visible={modalVisible}>
        <ModalContentContainer $screenSizes={{ isTablet, isMobile }}>
          <ModalTitle>Login</ModalTitle>
          <InputGroup>
            <div>Username</div>
            <FormInput
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            ></FormInput>
          </InputGroup>

          <InputGroup>
            <div>Password</div>
            <FormInput
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></FormInput>
          </InputGroup>

          <ButtonWrapper>
            <Button width={60} height={100} onClick={handleLogin}>
              Login
            </Button>
          </ButtonWrapper>
        </ModalContentContainer>
      </ModalContainer>
    </>
  );
};

export default LoginModal;

let ModalContainer = styled.div`
  position: fixed;
  visibility: ${(props) => (props?.$visible ? "visible" : "hidden")};
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

let ModalContentContainer = styled.div`
  position: relative;
  z-index: 1;
  width: ${({ $screenSizes }) =>
    $screenSizes?.isTablet || $screenSizes?.isMobile ? "85%" : "25%"};
  height: ${({ $screenSizes }) =>
    $screenSizes?.isTablet || $screenSizes?.isMobile ? "70%" : "40%"};
  padding: 1% 2%;

  background-color: #f196ff;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

let InputGroup = styled.div`
  width: 100%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-bottom: 1px solid black;
`;

let ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 8%;
  align-self: center;
`;

let FormInput = styled.input`
  width: 100%;
  color: #7d548c;
  background-color: #f196ff;
  border: none;
  &:focus {
    outline: none;
  }

  &:-internal-autofill-selected {
    color: #7d548c !important;
    background-color: #f196ff !important;
  }
`;

let ModalTitle = styled.h2`
  margin: 2% 0;
  align-self: center;
`;
