import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CreditCard } from "@phosphor-icons/react";
import paytrailMini from "../assets/paytrailMini.png";
import Announcement from "../components/Announcement";
import hesyLogo from "../assets/Responsibility/hesy_logo.webp";
import { large, tablet, mobile } from "../responsive";
import CheckoutItems from "../components/CheckoutItems";

const Kassa = ({ cart }) => {
  const [deliveryFee, setDeliveryFee] = useState(0);

  var totalPrice = 0;
  
  cart.map((item) => (totalPrice += JSON.parse(item.price)));

  var hesyPrice = totalPrice / 10;

  var whatDeliveryFee = 0;
  var subtotal = 0;
  
  if (totalPrice > 100) {
    whatDeliveryFee = 0;
    subtotal = totalPrice;
  } else {
    whatDeliveryFee = JSON.parse(deliveryFee);
    subtotal = totalPrice + JSON.parse(deliveryFee);
  }

  return (
    <Container>
      <Announcement />
      <Header cart={cart} />
      <Wrapper>
        <FormContainer>
          <PaymentForm>
            <HeaderContainer id="Header-Container">
              <FormHeader id="Form-Header" htmlFor="contact">Yhteystietosi</FormHeader>
            </HeaderContainer>
            <InputsContainer id="Iputs-Container">
              <InputContainer id="Input-container">
                <Input type="email" placeholder="Sähköposti" />
                <Input type="tel" placeholder="Puhelinnumero" />
              </InputContainer>
            </InputsContainer>

            <HeaderContainer id="Header-Container">
              <FormHeader id="Form-Header" htmlFor="contact">Toimitus</FormHeader>
            </HeaderContainer>
            <InputsContainer id="Inputs-Container">
              <InputContainer id="Input-Container">
                <Select>
                  <Option defaultValue="Suomi">Suomi</Option>
                </Select>
              </InputContainer>
              <InputContainer id="Input-Container">
                <Input type="text" placeholder="Etunimi" />
                <Input type="text" placeholder="Sukunimi" />
              </InputContainer>
              <InputContainer id="Input-Container">
                <LongInput type="text" placeholder="Osoite" />
              </InputContainer>
              <InputContainer id="Input-Container">
                <Input type="text" placeholder="Postinumero" />
                <Input type="text" placeholder="Kaupunki" />
              </InputContainer>
            </InputsContainer>

            <HeaderContainer>
              <FormHeader htmlFor="contact">Toimitustapa</FormHeader>
            </HeaderContainer>
            <RadioInputsContainer>
              <RadioInputContainer>
                <RadioInput
                  type="radio"
                  id="posti"
                  value={4.8}
                  name="toimitus"
                  onChange={(e) => setDeliveryFee(e.target.value)}
                />
                <DeliverTypeLabel htmlFor="posti">1. Posti</DeliverTypeLabel>
                <DeliverFee>4.80 €</DeliverFee>
              </RadioInputContainer>
              <RadioInputContainer>
                <RadioInput
                  type="radio"
                  id="matkahuolto"
                  value={5.9}
                  name="toimitus"
                  onChange={(e) => setDeliveryFee(e.target.value)}
                />
                <DeliverTypeLabel htmlFor="matkahuolto">
                  2. Matkahuolto
                </DeliverTypeLabel>
                <DeliverFee>5.90 €</DeliverFee>
              </RadioInputContainer>
            </RadioInputsContainer>

            <HeaderContainer>
              <FormHeader>Maksu</FormHeader>
            </HeaderContainer>
            <RadioInputsContainer>
              <RadioInputContainer>
                <RadioInput type="radio" id="kortti" name="maksutapa" />
                <DeliverTypeLabel htmlFor="kortti">
                  Korttimaksu
                </DeliverTypeLabel>
                <IconContainer>
                  <CreditCard size={25} weight="light" />
                </IconContainer>
              </RadioInputContainer>
              <RadioInputContainer>
                <RadioInput type="radio" id="verkkopankki" name="maksutapa" />
                <DeliverTypeLabel htmlFor="verkkopankki">
                  Verkkopankki
                </DeliverTypeLabel>
                <LogoImage src={paytrailMini} alt="" />
              </RadioInputContainer>
              <RadioInputContainer>
                <RadioInput type="radio" id="mobilepay" name="maksutapa" />
                <DeliverTypeLabel htmlFor="mobilepay">
                  MobilePay
                </DeliverTypeLabel>
              </RadioInputContainer>
              <RadioInputContainer>
                <RadioInput type="radio" id="siirto" name="maksutapa" />
                <DeliverTypeLabel htmlFor="siirto">Siirto</DeliverTypeLabel>
              </RadioInputContainer>
              <RadioInputContainer>
                <RadioInput type="radio" id="pivo" name="maksutapa" />
                <DeliverTypeLabel htmlFor="pivo">Pivo</DeliverTypeLabel>
              </RadioInputContainer>
            </RadioInputsContainer>
          </PaymentForm>
        </FormContainer>
        {/*        
      
          <CardPaymentLabel>Korttimaksu</CardPaymentLabel>
          <Input type="number" placeholder="Kortin numero" />
          <Input type="number" placeholder="Viimeinen voimassaolopäivä (KK/VV)" />
          <Input type="number" placeholder="Turvakoodi" />
          <Input type="text" placeholder="Nimi kortissa" />

          <Submit>Maksa</Submit> */}
        <SummaryContainer>
          <SummaryItems>
            <ItemsContainer>
              {cart.map((item) => (
                <CheckoutItems cart={cart} itemId={item.id} key={item.id} />
              ))}
            </ItemsContainer>
            <SummaryCenter>
              <SummaryTextsContainer>
                <SummaryText>
                  Välisumma<SummaryPrice>{Number(totalPrice).toFixed(2)} €</SummaryPrice>
                </SummaryText>
                <SummaryText>
                  Toimituskulut
                  <SummaryPrice>
                    {Number(whatDeliveryFee).toFixed(2)} €
                  </SummaryPrice>
                </SummaryText>
                <SummaryText type="total">
                  Yhteensä
                  <SummaryPrice>{Number(subtotal).toFixed(2)} €</SummaryPrice>
                </SummaryText>
              </SummaryTextsContainer>
              <InputContainer>
              <Submit type="submit" value="Maksa" />
            </InputContainer>
            </SummaryCenter>
            <SummaryBottom>
              <HesyContainer>
                <HesyText>
                  Tuotteiden loppusummasta lahjoitetaan
                  <HesyDonation>
                    <b> {Number(hesyPrice).toFixed(2)} € </b>
                  </HesyDonation>
                  HESY ry:lle. Sydämmellinen kiitos!
                </HesyText>
                <Circle>
                  <HesyLogo src={hesyLogo}></HesyLogo>
                </Circle>
              </HesyContainer>
            </SummaryBottom>
          </SummaryItems>
        </SummaryContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;

  ${large({
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  })}
`;

const FormContainer = styled.div`
  flex: 1;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;

  ${large({ width: "100%" })}
`;

const PaymentForm = styled.form`
  border-right: 1px solid black;

  ${large({
    border: "none",
    width: "100%",
  })}
`;

const HeaderContainer = styled.div`
  justify-content: center;
  display: flex;

  ${large({
    marginBottom: "10px"
  })} 
`;

const FormHeader = styled.h2`
  font-size: 32px;
  width: 500px;
  margin-bottom: 0%;

  @media (max-width: 1100px) {
    margin-left: 15px;
  }
  ${large({
    width: "85%", 
    marginLeft: "0px"
  })} 
`;

const InputsContainer = styled.div`
  margin: 10px 10px 10px 10px;
  ${large({
    margin: "0px",
    display: "flex",
    flexDirection: "column" 
  })}    
`;

const InputContainer = styled.div`
  align-items: center;
  ${large({
    display: "flex",
    flexDirection: "column"
  })}
`;

const Input = styled.input`
  width: 201px;
  height: 20px;
  padding: 12px 20px;
  margin: 8px;
  border-radius: 5px;
  font-size: 16px;
  border: solid 1px rgb(118, 118, 118);

  @media (max-width: 1100px) {
    width: 400px;
  }
  ${large({
    width: "80%",
    margin: "8px, 0px"
  })}
`;

const Select = styled.select`
  width: 502px;
  height: 46.22px;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 1100px) {
    width: 442px;
  }
 ${large({ width: "85%", margin: "8px 0px"  })}
 ${tablet({ width: "87%", margin: "8px 0px"  })}
 ${mobile({ width: "90%", margin: "8px 0px" })}
`;

const LongInput = styled.input`
  width: 460px;
  height: 20px;
  padding: 12px 20px;
  margin: 8px;
  border-radius: 5px;
  font-size: 16px;
  border: solid 1px rgb(118, 118, 118);

  @media (max-width: 1100px) {
    width: 400px;
  }
  ${large({
    width: "80%",
    margin: "8px 0px"
  })}
`;

const Option = styled.option`
`;

const RadioInputsContainer = styled.div`
  margin: 10px 10px 10px 10px;

  ${large({ 
    margin: "0px", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center" 
  })}   
`;


const RadioInputContainer = styled.div`
  width: 460px;
  height: 20px;
  padding: 12px 20px;
  margin: 8px;
  border-radius: 5px;
  background-color: white;
  border: solid 1px rgb(118, 118, 118);
  display: flex;

  @media (max-width: 1100px) {
    width: 400px;
  }
  ${large({
    width: "80%",
   margin: "8px 0px"
  })}
  
`;

const RadioInput = styled.input`
  width: 16px;
  margin: 0%;
`;
const DeliverTypeLabel = styled.label`
  font-size: 16px;
  padding-left: 15px;
`;

const DeliverFee = styled.p`
  font-size: 14px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  margin: 0%;
  margin-left: auto;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0%;
  margin-left: auto;
`;
const LogoImage = styled.img`
  display: flex;
  align-items: center;
  margin: 0%;
  margin-left: auto;
  width: 30px;
`;

const Submit = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 30px;
  background-color: black;
  color: #fff9e3;
  margin: 20px 20px 20px 20px;
  font-size: 16px;

  @media (max-width: 1100px) {
    width: 440px;
  }
  ${large({
    width: "80%", 
    margin: "20px 0px",
    display: "flex",
    justifyContent: "center"
  })}
`;

const SummaryContainer = styled.div`
  flex: 1;
  display: flex;
  padding-top: 20px;
  width: 50%;
  justify-content: flex-start;

  ${large({ 
    width: "100%",
    alignItems: "center",
    justifyContent: "center" 
  })}
`;

const SummaryItems = styled.div`
  display: flex;
  width: 550px;
  margin: 20px;
  padding: 20px;
  flex-direction: column;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #b8b8b8;
  }

  ${mobile({
    width: "100%",
    margin: "20px 15px",
    padding: "0px", 
    display: "flex", 
    justifyContent: "center"
  })}
`;

const ItemsContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const SummaryCenter = styled.div`
  margin-bottom: 30px;
  margin-right: 20px;
  margin-top: 30px;

  ${large({ marginRight: "0px"})}    
`;

const SummaryTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SummaryText = styled.span`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "17px"};
`;

const SummaryPrice = styled.span``;

const SummaryBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HesyContainer = styled.div`
  display: flex;
  height: 220px;
  width: 300px;
  flex-direction: column;
  background-color: #ebc462;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

const HesyText = styled.span`
  text-align: center;
  margin-bottom: 10px;
`;

const HesyDonation = styled.span``;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  position: relative;
`;

const HesyLogo = styled.img`
  height: 5rem;
  width: 5rem;
`;

export default Kassa;
