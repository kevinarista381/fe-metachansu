import React from "react";
import styled from "styled-components";

import CardComponent from "./shared-components/CardComponent";
import Section from "./shared-components/Section";

import { useGetIsMobile, useGetIsTablet } from "../helpers/ScreenSize";
import { useFetchApi } from "../helpers/FetchApi";

const HomeComponent = () => {
  let isMobile = useGetIsMobile();
  let isTablet = useGetIsTablet();
  let data = useFetchApi("/product");

  return (
    <ContentContainer>
      <Section title="Hot Items">
        <CardContainer $screenType={{ isMobile, isTablet }}>
          {data?.map((item, index) => (
            <CardComponent
              key={`Hot-items-${index}`}
              name={item.name}
              price={item.price}
              stock={item.stock}
              image={item.image}
            />
          ))}
        </CardContainer>
      </Section>

      <Section title="Selling">
        <CardContainer $screenType={{ isMobile, isTablet }}>
          <CardComponent />
        </CardContainer>
      </Section>
    </ContentContainer>
  );
};

export default HomeComponent;

let ContentContainer = styled.div`
  padding-top: 2%;
  margin-left: 4%;
  margin-right: 4%;
  min-width: 20vw;
  min-height: 50vh;
  background-color: #e3ccdd;
`;

// let CardContainer = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: ${({ $screenType }) => {
//     if ($screenType?.isTablet) return "space-evenly";
//     if ($screenType?.isMobile) return "center";
//     return "space-between";
//   }};

//   margin-left: 4%;
//   margin-right: 4%;
// `;

let CardContainer = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  ${({ $screenType }) => {
    if ($screenType?.isTablet || $screenType?.isMobile) {
      return `
  display: flex;
  flex-flow: row wrap;
  justify-content: ${$screenType?.isTablet ? "space-evenly" : "center"};
  
   `;
    }
    return `
    display: grid;
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    grid-row-gap: 3vh;
    grid-column-gap: 5vw;
    `;
  }}
`;
