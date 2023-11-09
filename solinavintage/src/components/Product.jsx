import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 700pxpx;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 75%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const Title = styled.p`
  font-size: 20px;
`;
const Size = styled.p`
  font-size: 20px;
`;
const Prize = styled.p`
  font-size: 20px;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoContainer>
        <Title>{item.title}</Title>
        <Size>{item.size}</Size>
        <Prize>{item.prize}</Prize>
      </InfoContainer>
    </Container>
  );
};

export default Product;
