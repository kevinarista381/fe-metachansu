import React, { useState } from "react";
import styled from "styled-components";

import HomeComponent from "./HomeComponent";
import LoginModal from "./shared-components/LoginModal";
import Navbar from "./Navbar";

import background from "../img/decor/star.png";
import contactus from "../img/ui/contactus.png";
import { useGetUserData } from "../helpers/UserData";

function MainComponent() {
  let user = useGetUserData();

  const [userName, setUserName] = useState(user?.firstName);

  return (
    <div>
      <BackgroundImage src={background} />
      <div className="frame">
        <Navbar />
        {userName && (
          <WelcomeMessage>
            <h1>Welcome, {userName.toUpperCase()}</h1>
          </WelcomeMessage>
        )}

        <div className="contactus">
          <img src={contactus} />
        </div>

        <HomeComponent />

        <LoginModal onLogin={setUserName} />

        <div className="footer">
          <div>This is the footer</div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;

let BackgroundImage = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  height: 100%;
  width: 100%;
  z-index: -1;
  max-height: 100vh;
  margin: auto;
`;

let WelcomeMessage = styled.div`
  color: white;
`;
