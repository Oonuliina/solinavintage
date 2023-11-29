import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import Announcement from "../components/Announcement";
import {mobile, tablet} from "../responsive";

const Ostoskori = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  /* Counting total price of the products */
  var totalPrice = 0;
  cart.map((item) => (totalPrice += JSON.parse(item.price)));

   /* Counting HESY donation amount */
  var hesyPrice = totalPrice / 10;

  /* Checking if the cart is empty */
  let messageStyle = {}
  if (cart.length > 0) {
    messageStyle = {display: "none"};
  }

  /* Giving the summary details if cart is not empty */
  let summaryStyle = {}
  if (cart.length < 1){
    summaryStyle = {display: "none"}
  }

  return (
    <Container>
      {/* Announcement for free delivery if ordering with over 100€ */}
      <Announcement />
      <Header cart={cart} />
      {/* Shopping cart */}
      <Wrapper>
        <Title>Ostoskorisi</Title>
        <Top>
          <TopText>Ostoskori({cart.length})</TopText>
          <TopButton onClick={() => navigate("/tuotteet")}>
            Jatka Ostoksia
          </TopButton>
        </Top>
        <Bottom>
          {/* Product details */}
          <Info>
            <Message style={messageStyle}>Ostoskori on tyhjä</Message>
            {/* Mapping the items in the cart array and creating a component for each */}
            {cart.map((item) => (
              <CartItem removeFromCart={removeFromCart} cart={cart} itemId={item.id} key={item.id} />
            ))}
          </Info>
          {/* Price Summary */}
          <Summary style={summaryStyle}>
            <SummaryTitle>Yhteenveto</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>Yhteensä</SummaryItemText>
              <SummaryItemPrice>{totalPrice} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Lahjoitus Hesylle 10%</SummaryItemText>
              {/* toFixed makes the decimals always show even if they are 00 */}
              <SummaryItemPrice>{Number(hesyPrice).toFixed(2)} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryText>
              Hinta sisältää alv. Toimituskulut lasketaan kassalla.
            </SummaryText>
            <Button onClick={() => navigate("/kassa")}>Kassa</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Ostoskori;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

  @media only screen and (max-width: 380px) {
    padding: 5px;
  }
`;
const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  font-wight: 200;
  ${mobile({ fontSize: "23px" })}

`;
const Top = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
`;

const TopButton = styled.button`
  border-radius: 30px;
  padding: 10px 20px;
  background-color: transparent;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid gray;

  ${mobile({ width: "120px", fontSize: "13px", padding: "7px 10px" })}
`;
const TopText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${tablet({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  display: flex;
  flex-direction: column;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryText = styled.span`
  font-size: 15px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  margin-top: 30px;
  width: 100%;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
`;
const Message = styled.h1`
  text-align: center;
`;
