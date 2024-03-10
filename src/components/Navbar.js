import React from "react";
import styled from "styled-components";

import mtm from "../img/decor/mtmcut.png";
import ras from "../img/decor/rascut.png";
import logo from "../img/decor/marketlogo.png";
import Button from "./shared-components/Button";

const Navbar = () => {
  return (
    <NavbarContainer>
      <TitleContainer>
        <ImageWrapper>
          <img src={mtm} alt="Aisha" />
        </ImageWrapper>
        <TitleItem>
          <ImageWrapper>
            <img src={logo} alt="Logo" />
          </ImageWrapper>

          <form>
            <SearchBar>
              <SearchInput
                type="text"
                placeholder="Type in the item you're looking for"
              ></SearchInput>
              <Button width={10} height={50} type="submit">
                <i className="fa fa-search"></i>
              </Button>
            </SearchBar>
            {/* <button type="submit" className="menubtn"><i className="fa fa-shopping-cart"></i></button> */}
          </form>
        </TitleItem>
        <ImageWrapper>
          <img src={ras} alt="Laby" />
          {/* <button type="submit">Login</button> */}
        </ImageWrapper>
      </TitleContainer>
      <NavItemsContainer>
        <NavItem>
          <a>Home</a>
        </NavItem>
        <NavItem>
          <a>Selling (S&gt;)</a>
        </NavItem>
        <NavItem>
          <a>Buying (B&gt;)</a>
        </NavItem>
        <NavItem>
          <a>Contact Info</a>
        </NavItem>
      </NavItemsContainer>
    </NavbarContainer>
  );
};

export default Navbar;

let NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

let TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  width: 100vw;
  height: auto;
  background-image: linear-gradient(#fabbf8, #ce5ae8);
`;

let TitleItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

let ImageWrapper = styled(TitleItem)`
  height: inherit;
`;

let NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 100%;
  background-color: red;
  align-content: center;
`;

let NavItem = styled.div`
  &:hover {
    color: gold;
    cursor: pointer;
  }
  width: 100%;
  border: 1px solid black;
`;

let SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

let SearchInput = styled.input`
  width: 60%;
  height: 50%;
  margin-right: 1%;
`;
