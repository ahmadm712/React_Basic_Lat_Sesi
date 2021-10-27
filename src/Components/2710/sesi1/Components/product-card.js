import React, { useState } from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  display: flex;
  flex: 1;
`;

const StyleImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

const StyledProductCardContainer = styled.div`
  margin: 10px;
  height: 300px;
  width: 300px;
  border: 2px solid red;
`;

const StyledActionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;

const StyledButton = styled.button`
  padding: 8px 12px;
`;

function ProductCard(props) {
  return (
    <StyledProductCardContainer>
      {/* Product Image */}
      <StyledImageContainer>
        <StyleImage
          src="https://media.istockphoto.com/photos/vegetarian-pizza-with-broccoli-cherry-tomato-pepper-and-mushrooms-picture-id1297290376?b=1&k=20&m=1297290376&s=170667a&w=0&h=lwGeM5VzMWRRwJpGwGhLgoMVSDMJL5OuCYhnhCmNthc="
          alt=""
        />
      </StyledImageContainer>
      {/*Action */}
      <StyledActionContainer>
        <StyledButton className="btn btn-danger" onClick={props.onCancel}>
          Cancel
        </StyledButton>
        <p>Stok {props.stock}</p>
        <StyledButton className="btn btn-primary" onClick={props.onBuy}>
          Buy
        </StyledButton>
      </StyledActionContainer>
    </StyledProductCardContainer>
  );
}

export default ProductCard;
