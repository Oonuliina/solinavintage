import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 5px;
  min-width: 280px;
  flex-direction: column;
`;
const Image = styled.img`
  display: flex;
  height: 400px;
  width: 350px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 350px;
`;
const Title = styled.span`
  padding: 5px;
  font-size: 15px;
  text-align: left;

  &:hover {
    font-weight: bold;
  }
`;
const Size = styled.span`
  padding: 5px;
  font-size: 15px;
  text-align: left;
  font-weight: 600;
`;
const Price = styled.span`
  padding: 5px;
  font-size: 15px;
  text-align: left;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoContainer>
        <Title>{item.title}</Title>
        <Size>{item.size}</Size>
        <Price>{item.price}</Price>
      </InfoContainer>
    </Container>
  );
};

export default Product;
