import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CreditCard } from "@phosphor-icons/react";
import paytrailMini from "../assets/paytrailMini.png";
import Announcement from "../components/Announcement";
import hesyLogo from "../assets/Responsibility/hesy_logo.webp";
import redDress from "../assets/dresses/red_silky_dress.JPG";
import { large } from "../responsive";

const Kassa = ({cart}) => {
  return (
    <Container>
      <Announcement />
      <Header cart={cart}/>
      <Wrapper>
        <FormContainer>
          <PaymentForm>
            <HeaderContainer>
              <FormHeader for="contact">Yhteystietosi</FormHeader>
            </HeaderContainer>
            <InputsContainer>
              <InputContainer>
                <Input type="email" placeholder="Sähköposti" />
                <Input type="tel" placeholder="Puhelinnumero" />
              </InputContainer>
            </InputsContainer>

            <HeaderContainer>
              <FormHeader for="contact">Toimitus</FormHeader>
            </HeaderContainer>
            <InputsContainer>
              <InputContainer>
                <Select>
                  <Option value="Suomi" selected>
                    Suomi
                  </Option>
                </Select>
              </InputContainer>
              <InputContainer>
                <Input type="text" placeholder="Etunimi" />
                <Input type="text" placeholder="Sukunimi" />
              </InputContainer>
              <InputContainer>
                <LongInput type="text" placeholder="Osoite" />
              </InputContainer>
              <InputContainer>
                <Input type="text" placeholder="Postinumero" />
                <Input type="text" placeholder="Kaupunki" />
              </InputContainer>
            </InputsContainer>

            <HeaderContainer>
              <FormHeader for="contact">Toimitustapa</FormHeader>
            </HeaderContainer>
            <InputsContainer>
              <RadioInputContainer>
                <RadioInput type="radio" id="posti" name="toimitus" />
                <DeliverTypeLabel htmlFor="posti">1. Posti</DeliverTypeLabel>
                <DeliverFee>4.95 €</DeliverFee>
              </RadioInputContainer>
              <RadioInputContainer>
                <RadioInput type="radio" id="matkahuolto" name="toimitus" />
                <DeliverTypeLabel htmlFor="matkahuolto">
                  2. Matkahuolto
                </DeliverTypeLabel>
                <DeliverFee>5.90 €</DeliverFee>
              </RadioInputContainer>
            </InputsContainer>
            
            <HeaderContainer>
              <FormHeader>Maksu</FormHeader>
            </HeaderContainer>
            <InputsContainer>
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
            </InputsContainer>
      
            <Submit type="submit" value="Maksa" />
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
            <SummaryTop>
              <ProductContainer>
                <ProductImage src={redDress} />
                <ProductTextContainer>
                  <ProductTexts>
                    <ProductText type="name">
                      Tuotteen nimi
                    </ProductText>
                    <ProductText>Tuotteen koko</ProductText>
                    <ProductText>Tuotteen väri</ProductText>
                  </ProductTexts>
                </ProductTextContainer>
                <ProductPrice>€ 0,00</ProductPrice>
              </ProductContainer>
            </SummaryTop>
            <SummaryCenter>
              <SummaryTextsContainer>
                <SummaryText>
                  Välisumma<SummaryPrice>€ 0,00</SummaryPrice>
                </SummaryText>
                <SummaryText>
                  Toimituskulut<SummaryPrice>€ 0,00</SummaryPrice>
                </SummaryText>
                <SummaryText type="total">
                  Yhteensä
                  <SummaryPrice>
                    € 0,00
                  </SummaryPrice>
                </SummaryText>
              </SummaryTextsContainer>
            </SummaryCenter>
            <SummaryBottom>
              <HesyContainer>
                <HesyText>
                  Tuotteiden loppusummasta lahjoitetaan{" "}
                  <HesyDonation>
                    <b>0,00€</b>
                  </HesyDonation>{" "}
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

    ${large({ flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "center"})}
`;

const FormContainer = styled.div`
  flex: 1;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  
  ${large({ display: "block" ,width: "95vw",alignItems: "center", justifyContent: "center"})}
`;
const PaymentForm = styled.form`
  border-right: 1px solid black;

  ${large({ border: "none", width: "95vw",alignItems: "center", justifyContent: "center"})}
`;

/* const InfoSection= styled.section`
`;
 */
const HeaderContainer = styled.div`
  justify-content: center;
  display: flex;
`;

const FormHeader = styled.h2`
  font-size: 32px;
  width: 500px;
  margin-bottom: 0%;

  @media (max-width: 1100px) {
    margin-left: 15px;
  }
`;

/* const Inputs = styled.div`
text-align:center;
@media(max-width: 1100px) {
  width: 520px;
}
`; */

const InputsContainer = styled.div`
  margin: 10px 10px 10px 10px;
`;

const InputContainer = styled.div`
  align-items: center;
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
  ${large({ width: "80%"})}
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
  ${large({ width: "79vw"})}
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
  ${large({ width: "74vw"})}
`;

const Option = styled.option``;
/* 
const Wrapper = styled.div`
`; */

/* const RadioInputsContainer = styled.div`
margin: 10px 10px 10px 10px;
`;
 */
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
  ${large({ width: "74vw"})}
`;

const RadioInput = styled.input`
  width: 16px;
  margin: 0%;
`;
const DeliverTypeLabel = styled.label`
  font-size: 16px;
  padding-left: 15px;
`;
/* 
const CardPaymentLabel = styled.option`
  font-size: 20px;
`; */

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
  ${large({ width: "80vw"})}
`;

const SummaryContainer = styled.div`
  flex: 1;
  display: flex;
  padding-top: 20px;
  width: 50%;
  justify-content: flex-start;

  ${large({ width: "100%", alignItems: "center", justifyContent: "center"})}
`;
const SummaryItems = styled.div`
  display: flex;
  width: 500px;
  margin: 20px;
  padding: 20px;
  flex-direction: column;
`;
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
const SummaryCenter = styled.div`
  margin-bottom: 30px;
`;
const SummaryTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SummaryText = styled.span`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  font-weight: ${props=>props.type === "total" && "600"};
  font-size: ${props=>props.type === "total" && "17px"};
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
