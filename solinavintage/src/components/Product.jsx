import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 5px;
  flex-direction: column;

  @media only screen and (max-width: 380px) {
    margin: 3px;
  }

`;


const Image = styled.img`
  display: flex;
  height: 400px;
  width: 350px;
  cursor: pointer;

  @media only screen and (max-width: 380px) {
    height: 200px;
    width: 170px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 350px;

  @media only screen and (max-width: 380px) {
    width: 170px;
    height: 65px;
    margin-top: 2px;
    margin-bottom: 3px;
    padding
  }
`;
const Title = styled.span`
  padding: 5px;
  font-size: 15px;
  text-align: left;

  &:hover {
    font-weight: bold;
  }
  @media only screen and (max-width: 380px) {
    padding: 3px;
    font-size: 11px;
  }
`;
const Size = styled.span`
  padding: 5px;
  font-size: 15px;
  text-align: left;
  font-weight: 600;

  @media only screen and (max-width: 380px) {
    padding: 2px;
    font-size: 11px;
  }
`;
const Price = styled.span`
  padding: 5px;
  font-size: 15px;
  text-align: left;

  @media only screen and (max-width: 380px) {
    padding: 2px;
    font-size: 11px;
  }
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
