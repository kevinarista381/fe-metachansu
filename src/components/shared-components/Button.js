import React from "react";
import styled from "styled-components";

const Button = (props) => {
  let { width, height, onClick } = props;
  return (
    <GeneralButton $width={width} $height={height} onClick={onClick}>
      {props.children}
    </GeneralButton>
  );
};

export default Button;

let GeneralButton = styled.button`
  width: ${(props) => `${props.$width}%`};
  height: ${(props) => `${props.$height}%`};
`;
