import React from "react";

import background from "../img/decor/star.png";
import contactus from "../img/ui/contactus.png";
import HomeComponent from "./HomeComponent";
import Navbar from "./Navbar";
import styled from "styled-components";

function MainComponent() {
  return (
    <div>
      <BackgroundImage src={background} />
      <div className="frame">
        <Navbar />

        <div className="contactus">
          <img src={contactus} />
        </div>

        <HomeComponent />

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
