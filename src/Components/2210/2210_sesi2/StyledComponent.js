import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";


const StyledButtonComponent = styled.button`
    padding: 5px ${props => props.pLeftRight};
`

const animasi = keyframes`
    from{
        transform:(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${animasi} 3s linear infinite;
  padding: 2em 1em;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const StyledButton = styled.button`
  background: none;
  color: palevioletred;
  font-size: 1em;
  padding: 10px;
  border: 0px;
`;

const StyledOutlineButton = styled(StyledButton)`
  border: 2px solid palevioletred;
`;

const StyledFilledButton = styled(StyledButton)`
  background-color: palevioletred;
  color: white;
  margin-left: 10px;
`;
let isPrimary = true;

let valuePadding = '12px'
if(valuePadding !== '15px'){
    valuePadding = '25px'
}

function StyledComponent() {
  return (
    <>
      <StyledButton>Click Me</StyledButton>
      <StyledOutlineButton>ini yang outline</StyledOutlineButton>
      <StyledFilledButton>Ini Yang filled</StyledFilledButton>
      <Rotate>
        <h1>Jangan males</h1>
      </Rotate>
      {/* News */}
      <StyledButtonComponent pLeftRight={valuePadding}>
            Si Panjang
      </StyledButtonComponent>
    </>
  );
}

export default StyledComponent;
