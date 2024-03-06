import React from "react";
import styled from "styled-components";

import noimg from "../../img/ui/noimage.png";
import Button from "./Button";

import { useGetIsMobile, useGetIsTablet } from "../../helpers/ScreenSize";

const CardComponent = (props) => {
  let { name, price, stock, image } = props;

  let isMobile = useGetIsMobile();
  let isTablet = useGetIsTablet();
  return (
    <CardWrapper $screenType={{ isMobile, isTablet }}>
      <ItemImageWrapper>
        <ItemImage src={image ? `data:image/png;base64, ${image}` : noimg} />
      </ItemImageWrapper>
      <ItemNameWrapper>{name ?? "-"}</ItemNameWrapper>
      <ItemDetailWrapper>
        <div>Price: {price ?? "-"} ED ea</div>
        <div>Available stock: {stock ?? "-"}</div>
      </ItemDetailWrapper>

      <Button width={60} height={10}>
        Add to Cart
      </Button>
    </CardWrapper>
  );
};

export default CardComponent;

let CardWrapper = styled.div`
  background-color: #94c8f3;
  border-radius: 15px;
  border: 2px solid #e6f7f7;
  margin-left: 2%;
  margin-right: ${({ $screenType }) =>
    $screenType.isTablet || $screenType.isMobile ? "2%" : "auto"};
  margin-bottom: 3%;
  width: ${({ $screenType }) => {
    if ($screenType.isTablet) return "30vw";
    if ($screenType.isMobile) return "50vw";
    return "15vw";
  }};
  max-height: 35%;
  padding-bottom: 2%;
`;

let ItemImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid #c6e09e;
  background-color: #a5be84;
  margin: 15% 35% 0% 35%;
  min-width: 4%;
  min-height: 30%;
`;

let ItemImage = styled.img``;

let ItemNameWrapper = styled.div`
  width: 100%;
  margin-top: 2%;
  font-size: 1.2em;
`;

let ItemDetailWrapper = styled.div`
display flex;
flex-flow: column nowrap;

  margin-top: 1%;
  margin-bottom: 2vh;
`;
