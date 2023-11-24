import React from "react";
import styled from "styled-components";
import { products } from "../data";

const SummaryTop = styled.div`
  margin-bottom: 30px;
`;
const ProductContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const ProductImage = styled.img`
  flex: 1;
  height: 130px;
`;
const ProductTextContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;
const ProductTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;
const ProductText = styled.span`
  padding-bottom: 2px;
  font-weight: ${props=>props.type === "name" && "600"};
`;
const ProductPrice = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ProductSize = styled.span`
  padding-bottom: 10px;
`;

const CartItem = ({ itemId }) => {
  const item = products.find((i) => i.id == itemId);

  function checkForSize(item) {
    if (!item.size) {
      return null;
    } else {
      return (
        <ProductSize>
          Koko: {item.size}
        </ProductSize>
      );
    }
  }

  return (
    <SummaryTop>
    <ProductContainer>
      <ProductImage src={item.img} />
      <ProductTextContainer>
        <ProductTexts>
          <ProductText type="name">
            {item.title}
          </ProductText>
          {checkForSize(item)}
          <ProductText>{item.color}</ProductText>
        </ProductTexts>
      </ProductTextContainer>
      <ProductPrice>{item.price} €</ProductPrice>
    </ProductContainer>
  </SummaryTop>
  );
};

export default CartItem;
