import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import orangeDress from "../assets/dresses/orange_dress.JPG";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

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

  @media only screen and (max-width: 380px) {
    font-size: 20px;
  }
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

  @media only screen and (max-width: 380px) {
    width: 100px;
    font-size: 11px;
  }
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
`;
const Info = styled.div`
  flex: 3;
`;
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
  font-weight: ${props=>props.type === "total" && "600"};
  font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
  
`;
const SummaryItemPrice = styled.span``;
const SummaryText = styled.span`
  font-size: 14px;
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
`;



const Ostoskori = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Wrapper>
      <Title>Ostoskorisi</Title>
        <Top>
            <TopText>Ostoskori(2)</TopText>
            <TopButton onClick={() => navigate("/tuotteet")}>
              Jatka Ostoksia
            </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={orangeDress} />
                <Details>
                  <ProductName><b>Tuote: </b>Oranssi mekko</ProductName>
                  <ProductSize><b>Koko: </b>S</ProductSize>
                  <ProductColor><b>Väri: </b>oranssi</ProductColor>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>€39,00</ProductPrice>
                <Removebutton><DeleteIcon /></Removebutton>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src={orangeDress} />
                <Details>
                  <ProductName><b>Tuote: </b>Oranssi mekko</ProductName>
                  <ProductSize><b>Koko: </b>S</ProductSize>
                  <ProductColor><b>Väri: </b>oranssi</ProductColor>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>€39,00</ProductPrice>
                <Removebutton><DeleteIcon /></Removebutton>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src={orangeDress} />
                <Details>
                  <ProductName><b>Tuote: </b>Oranssi mekko</ProductName>
                  <ProductSize><b>Koko: </b>S</ProductSize>
                  <ProductColor><b>Väri: </b>oranssi</ProductColor>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>€39,00</ProductPrice>
                <Removebutton><DeleteIcon /></Removebutton>
              </PriceDetail>
            </Product>
            
          </Info>
          <Summary>
            <SummaryTitle>Yhteenveto</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>Yhteensä</SummaryItemText>
              <SummaryItemPrice>€ 78,00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Lahjoitus Hesylle 10%</SummaryItemText>
              <SummaryItemPrice>€ 7,80</SummaryItemPrice>
            </SummaryItem>
            <SummaryText>Hinta sisältää alv. Toimituskulut lasketaan kassalla.</SummaryText>
            <Button onClick={() => navigate("/kassa")}>Kassa</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Ostoskori;
