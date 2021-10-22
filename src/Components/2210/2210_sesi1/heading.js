import React from "react";

import styled, { keyframes } from "styled-components";

const putar =keyframes`

from{
  transform:rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`

const StyledH1 = styled.h1`
  color: ${(props) => (props.primary === true ? "blue" : "red")};
  text-transform: uppercase;
`;

const StyledCenter = styled(StyledH1)`
  animation: ${putar} 5s linear 2s infinite;
  text-align: center;
`;

const StyledButton = styled.button.attrs((props) => {
  const theme = window.localStorage.getItem("theme");
  const rounded = props.rounded || "12px";
  return {
    withRounded: rounded,
    bg:theme === 'dark' ? 'blue' : 'green'
  };
})`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  background-color : ${(props) => props.bg};
  border-radius: ${(props) => props.withRounded};

  &:hover{
    background-color: black;
  }

  &:focus{
    background-color: whitesmoke;
  }
`;
// Component Biasa,
export const Container = (props) => {
  return <div className={props.className}>Container</div>;
};

const StyledContainer = styled(Container)`
  color: green;
  font-size: 48px;
`;

export const H1 = (props) => {
  return (
    <>
      <StyledCenter>Ahmad Muji</StyledCenter>
      <StyledH1 primary={true}>Hello World</StyledH1>
      <StyledButton rounded="4px"> Styled Button</StyledButton>
      <StyledButton onClick={() => alert("Holla")}> Styled Button</StyledButton>
      <StyledContainer />
    </>
  );
};
