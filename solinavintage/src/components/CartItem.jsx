import React from 'react'
import styled from 'styled-components';
import DeleteIcon from "@mui/icons-material/Delete";
import { products } from "../data";

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
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.span`
  padding-bottom: 10px;
`;

const ProductSize = styled.span`
padding-bottom: 10px;
`;
const ProductColor = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductPrice = styled.span`
font-size: 30px;
font-weight: 200;
`;

const Removebutton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 30px;
`;
const Hr = styled.hr`
background-color: lightgray;
border: none;
height: 1px;
  margin-bottom: 20px;
`;


const CartItem = ({ itemId }) => {

  const item = products.find(i => i.id == itemId);

  function checkForSize(item){
    if (!item.size){
      return null
    } else {
      return <ProductSize><b>Koko: </b>{item.size}</ProductSize>
    }
  }


  return (
    <Product>
    <ProductDetail>
      <Image src={item.img} />
      <Details>
        <ProductName><b>Tuote: </b>{item.title}</ProductName>
        {checkForSize(item)}
        <ProductColor><b>Väri: </b>{item.color}</ProductColor>
      </Details>
    </ProductDetail>
    <PriceDetail>
      <ProductPrice><b>€ </b>{item.price}</ProductPrice>
      <Removebutton ><DeleteIcon /></Removebutton>
    </PriceDetail>
  </Product>
  )
}

export default CartItem
