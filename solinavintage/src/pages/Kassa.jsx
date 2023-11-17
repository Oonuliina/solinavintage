import React from 'react'
import styled from "styled-components";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CreditCard } from '@phosphor-icons/react';
import paytrailMini from "../assets/paytrailMini.png"


const Kassa = () => {
  return (
    <Container>
      <Header />
      <FormContainer>
        <PaymentForm>
         {/*  <InfoSection> */}
            <HeaderContainer>
              <FormHeader for="contact">Yhteystietosi</FormHeader>
            </HeaderContainer>
     {/*        <Inputs> */}
            <InputsContainer>
              <InputContainer>
                <Input type="email"  placeholder="Sähköposti" />
                <Input type="tel" placeholder="Puhelinnumero" />
              </InputContainer>
            </InputsContainer>
          {/*   </Inputs> */}
        {/*   </InfoSection> */}

        {/*   <InfoSection> */}
            <HeaderContainer>
              <FormHeader for="contact">Toimitus</FormHeader>
            </HeaderContainer>
           {/*  <Inputs> */}
     <      InputsContainer> 
              <InputContainer>
                <Select>
                  <Option value="Suomi" selected>Suomi</Option>
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
          {/*   </Inputs> */}
           {/*  </InfoSection> */}
            
          {/*   <InfoSection> */}
            <HeaderContainer>
              <FormHeader for="contact">Toimitustapa</FormHeader>
            </HeaderContainer>
            <InputsContainer>
              <RadioInputContainer>
           {/*      <Wrapper> */}
                <RadioInput type="radio" id="posti" name="toimitus" />
                <DeliverTypeLabel htmlFor="posti">1. Posti</DeliverTypeLabel>
                <DeliverFee>4.95 €</DeliverFee>
             {/*    </Wrapper> */}
              </RadioInputContainer>
              <RadioInputContainer>
           {/*      <Wrapper> */}
                <RadioInput type="radio" id="matkahuolto" name="toimitus" />
                <DeliverTypeLabel htmlFor="matkahuolto">2. Matkahuolto</DeliverTypeLabel>
                <DeliverFee>5.90 €</DeliverFee>
             {/*    </Wrapper> */}
              </RadioInputContainer>
             </InputsContainer>
        {/*   </InfoSection> */}

         {/*  <InfoSection> */}
            <HeaderContainer>
              <FormHeader>Maksu</FormHeader>
            </HeaderContainer>
            <InputsContainer>
              <RadioInputContainer>
                {/* <Wrapper> */}
                <RadioInput type="radio" id="kortti" name="maksutapa" />
                <DeliverTypeLabel htmlFor="kortti">Korttimaksu</DeliverTypeLabel>
                <IconContainer>
                  <CreditCard size={25} weight="light" />
                </IconContainer>
               {/*  </Wrapper> */}
              </RadioInputContainer>
              <RadioInputContainer>
             {/*    <Wrapper> */}
                <RadioInput type="radio" id="verkkopankki" name="maksutapa" />
                <DeliverTypeLabel htmlFor="verkkopankki">Verkkopankki</DeliverTypeLabel>
                <LogoImage src={paytrailMini} alt="" />
                {/* </Wrapper> */}
              </RadioInputContainer>
              <RadioInputContainer>
                {/* <Wrapper> */}
                <RadioInput type="radio" id="mobilepay" name="maksutapa" />
                <DeliverTypeLabel htmlFor="mobilepay">MobilePay</DeliverTypeLabel>
                {/* </Wrapper> */}
              </RadioInputContainer>
              <RadioInputContainer>
               {/*  <Wrapper> */}
                <RadioInput type="radio" id="siirto" name="maksutapa" />
                <DeliverTypeLabel htmlFor="siirto">Siirto</DeliverTypeLabel>
               {/*  </Wrapper> */}
              </RadioInputContainer>
              <RadioInputContainer>
                {/* <Wrapper> */}
                <RadioInput type="radio" id="pivo" name="maksutapa" />
                <DeliverTypeLabel htmlFor="pivo">Pivo</DeliverTypeLabel>
               {/*  </Wrapper> */}
              </RadioInputContainer>
            </InputsContainer>
       {/*    </InfoSection> */}

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
      <Footer />
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
`;

const FormContainer = styled.div`
  width: 50%;
  display:flex;
  justify-content: flex-end;
  padding-top: 20px;

  @media(max-width: 1100px) {
    display: block;

  }
`;

const PaymentForm = styled.form`
  border-right: 1px solid black;
  height: 1200px;

  @media(max-width: 1100px) {
    border: none;
  }
`;

/* const InfoSection= styled.section`
`;
 */
const HeaderContainer = styled.div`
  justify-content: center;
  display:flex;
`;

const FormHeader = styled.h2`
  font-size: 32px;
  width: 500px;
  margin-bottom: 0%;

  @media(max-width: 1100px) {
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

  @media(max-width: 1100px) {
    width: 400px;
  }
`;

const Select = styled.select`
  width: 502px;
  height: 46.22px;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 5px;
  font-size: 16px;

  @media(max-width: 1100px) {
    width: 441px;
  }
`;

const LongInput = styled.input`
  width: 460px;
  height: 20px;
  padding: 12px 20px;
  margin: 8px;
  border-radius: 5px;
  font-size: 16px;
  border: solid 1px rgb(118, 118, 118); 

  @media(max-width: 1100px) {
    width: 400px;
  }
`;

const Option = styled.option`
`;
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


@media(max-width: 1100px) {
  width:400px;
}

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
    color: #FFF9E3;
    margin: 20px 20px 20px 20px;
    font-size: 16px;
    
    @media(max-width: 1100px) {
      width:440px;
    }
    

`;


export default Kassa                                                                              