import { Eye, ShoppingBag } from "@phosphor-icons/react";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";

const IconContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
`;

const Container = styled.div`
  display: flex;
  margin: 5px;
  flex-direction: column;

  &:hover ${IconContainer} {
    opacity: 1;
  }

  ${mobile({ margin: "3px" })}
`;
const ImageContainer = styled.div`
  display: flex;
  position: relative;
`;
const Image = styled.img`
  display: flex;
  height: 400px;
  width: 350px;
  cursor: pointer;
  position: relative;

  ${mobile({ height: "200px", width: "170px" })}
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: lightpink;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 350px;

  ${mobile({
    width: "170px",
    height: "105px",
    marginTop: "2px",
    marginBottom: "3px",
  })}
`;
const Title = styled.span`
  padding: 5px;
  font-size: 20px;
  text-align: left;

  &:hover {
    font-weight: bold;
  }

  ${mobile({ padding: "3px", fontSize: "15px" })}
`;
const Size = styled.span`
  padding: 5px;
  font-size: 20px;
  text-align: left;
  font-weight: 600;

  ${mobile({ padding: "3px", fontSize: "15px" })}
`;
const Price = styled.span`
  padding: 5px;
  font-size: 20px;
  text-align: left;

  ${mobile({ padding: "3px", fontSize: "15px" })}
`;
const Product = ({ item, addToCart }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/tuote/" + item.id;
    navigate(path);
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={item.img} />
        <IconContainer>
          <Icon>
            <Eye size={24} weight="light" onClick={routeChange} />
          </Icon>
          <Icon>
            <ShoppingBag
              size={24}
              weight="light"
              onClick={() => addToCart(item)}
            />
          </Icon>
        </IconContainer>
      </ImageContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Size>{item.size}</Size>
        <Price>{item.price} €</Price>
      </InfoContainer>
    </Container>
  );
};

export default Product;
