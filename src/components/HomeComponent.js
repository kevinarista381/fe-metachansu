import React from "react";
import styled from "styled-components";

import CardComponent from "./shared-components/CardComponent";
import Section from "./shared-components/Section";

import { useGetIsMobile, useGetIsTablet } from "../helpers/ScreenSize";
import { useFetchApi } from "../helpers/FetchApi";

const HomeComponent = () => {
  let isMobile = useGetIsMobile();
  let isTablet = useGetIsTablet();
  let data = useFetchApi({
    method: "GET",
    path: "/product",
  });

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
        <CardContainer>
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

let CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${({ $screenType }) => {
    if ($screenType?.isTablet) return "space-evenly";
    if ($screenType?.isMobile) return "center";
    return "space-between";
  }};

  margin-left: 4%;
  margin-right: 4%;
`;
