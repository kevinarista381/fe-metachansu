import React from "react";
import styled from "styled-components";

const Section = (props) => {
  let { title } = props;
  return (
    <SectionContainer>
      <SectionTitle> {title}</SectionTitle>
      {props.children}
      <Divider />
    </SectionContainer>
  );
};

export default Section;

let SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh 0 5vh 0;
`;

let SectionTitle = styled.h1`
  margin-bottom: 2%;
`;

let Divider = styled.div`
  margin-top: 5vh;
  border-bottom: 1px solid black;
  width: 90%;
`;
