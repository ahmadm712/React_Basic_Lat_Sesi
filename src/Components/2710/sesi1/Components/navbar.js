import React from "react";
import styled from "styled-components";
import CartIcons from "./icons/cart";

const StyledNavbar = styled.nav`
  background: #eee;
  padding: 6px 16px;
  display: flex;
  justify-content: flex-end;
`;

const StyledCartContainer = styled.div`
  display: flex;
`;

export default function NavbarRedux(props) {
  return (
    <StyledNavbar>
      <StyledCartContainer>
        <CartIcons />
        <p>{props.stock}</p>
      </StyledCartContainer>
    </StyledNavbar>
  );
}
