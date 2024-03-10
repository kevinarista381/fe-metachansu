import React, { useCallback, useState } from "react";
import { sha256 } from "js-sha256";
import styled from "styled-components";

import Button from "./Button";

import { useGetIsMobile, useGetIsTablet } from "../../helpers/ScreenSize";
import { RequestHandler } from "../../helpers/RequestHandler";

const Modal = (props) => {
  let { visible } = props;

  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  let isMobile = useGetIsMobile();
  let isTablet = useGetIsTablet();

  let handleLogin = useCallback(async () => {
    let hashedPw = sha256(password);

    try {
      await RequestHandler("post", "/login", {
        userName,
        password: hashedPw,
      });
      window.alert("Gz! Login succesful!");
    } catch (err) {
      window.alert(`An error occured: ${err.message}`);
    }
  });

  return (
    <ModalContainer $visible={visible}>
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
  );
};

export default Modal;

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
    $screenSizes?.isTablet || $screenSizes?.isMobile ? "80%" : "25%"};
  height: ${({ $screenSizes }) =>
    $screenSizes?.isTablet || $screenSizes?.isMobile ? "90%" : "40%"};
  padding: 1% 2%;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

let InputGroup = styled.div`
  width: 100%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

let ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 8%;
  align-self: center;
`;

let FormInput = styled.input`
  width: 100%;
`;

let ModalTitle = styled.h2`
  margin: 2% 0;
  align-self: center;
`;
