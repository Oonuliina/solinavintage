import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { products } from "../data";
import { mobile, tablet } from "../responsive";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;

  ${mobile({ height: "150px", width: "125px" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  ${tablet({ padding: "10px 0px 10px 10px" })}
  ${mobile({ padding: "0px 0px 0px 10px" })}
`;

const ProductName = styled.span`
  padding-bottom: 10px;
  font-size: 20px;
  ${mobile({ fontSize: "14px" })}
`;

const ProductSize = styled.span`
  padding-bottom: 10px;
  font-size: 20px;
  ${mobile({ fontSize: "14px" })}
`;
const ProductColor = styled.span`
  font-size: 20px;
  ${mobile({ fontSize: "14px" })}
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;

  ${tablet({ paddingLeft: "15px" })}
  ${mobile({ fontSize: "20px", paddingLeft: "5px" })}
`;

const Removebutton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 30px;

  ${mobile({ display: "flex", margin: "0" })}
`;

const CartItem = ({ itemId, cart, removeFromCart }) => {
  const item = products.find((i) => i.id == itemId);

  function checkForSize(item) {
    if (!item.size) {
      return null;
    } else {
      return (
        <ProductSize>
          <b>Koko: </b>
          {item.size}
        </ProductSize>
      );
    }
  }

  return (
    <Product>
      <ProductDetail>
        <Image src={item.img} />
        <Details>
          <ProductName>
            <b>Tuote: </b>
            {item.title}
          </ProductName>
          {checkForSize(item)}
          <ProductColor>
            <b>Väri: </b>
            {item.color}
          </ProductColor>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductPrice>
          {item.price}
          <b> €</b>
        </ProductPrice>
        <Removebutton onClick={() => removeFromCart(item)}>
          <DeleteIcon />
        </Removebutton>
      </PriceDetail>
    </Product>
  );
};

export default CartItem;
