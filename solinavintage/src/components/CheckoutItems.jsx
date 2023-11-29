import React from "react";
import styled from "styled-components";
import { products } from "../data";
import { large, mobile } from "../responsive";


const CheckoutItems = ({ itemId }) => {

  /* Go read comments from CartItem.jsx */

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
            <ProductText>Väri: {item.color}</ProductText>
          </ProductTexts>
        </ProductTextContainer>
        <ProductPrice>{item.price} €</ProductPrice>
      </ProductContainer>
    </SummaryTop>
  );
};

export default CheckoutItems;

const SummaryTop = styled.div`
  padding-right: 20px;

  ${mobile({ padding: "0px" })}
  ${large({ paddingRight: "4px" })}   
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
  font-weight: ${props => props.type === "name" && "600"};
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