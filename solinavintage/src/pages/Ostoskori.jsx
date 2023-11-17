import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import orangeDress from "../assets/dresses/orange_dress.JPG";
import whiteHeels from "../assets/shoes/white_lace_pumps.JPG";
import pearlEarrings from "../assets/accessories/earring_pearls.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

  @media only screen and (max-width: 380px) {
    padding: 5px;
`;

const Top = styled.div`
  padding: 20px, 20px, 0px, 20px;
`;
const Title = styled.h1`
  font-size: 40px;
  text-align: left;
  font-wight: 300;
  margin: 0px 0px;

  @media only screen and (max-width: 380px) {
    font-size: 20px;
  }
`;
const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px 0px 20px;
`;
const TopButton = styled.button`
  background-color: translucent;
  border-radius: 30px;
  border: 1px solid gray;
  width: 200px;
  cursor: pointer;

  @media only screen and (max-width: 380px) {
    width: 100px;
    font-size: 11px;
  }
`;
const TopTexts = styled.div`
  display: flex;
  margin: 30px 20px 0px 20px;
`;
const TopTextTuote = styled.p`
  flex: 2;
  text-align: left;
  font-size: 10px;
`;
const TopTextYhteensä = styled.p`
  flex: 1;
  align-text: right;
  font-size: 10px;

`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  padding-top: 20px;

  @media only screen and (max-width: 380px) {
    width: 100px;
    padding-top: 5px;
  }
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const ProductName = styled.span`
  font-size: 10px;
  text-align: left;
  padding: 0px 0px 10px;
`;
const ProductPrice = styled.span`
  font-size: 10px;
  text-align: left;
  padding: 0px 0px 10px;
`;
const ProductAmountContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductPriceTotal = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Bottom = styled.div`
  width: 100%;
`;
const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: right;
  margin-left: 70%;
  padding: 30px 0px 30px 0px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 380px) {
    margin-left: 10%;
  }
`;
const SummaryContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SummaryTitle = styled.h2`
  font-size: 13px;
  font-weight: 400;
`;
const SummaryPrice = styled.p`
  font-size: 15px;
  margin-left: 100px;


`;
const SummaryDesc = styled.p`
  font-size: 10px;
  text-align: left;
`;
const BottomButton = styled.button`
  background-color: black;
  color: white;
  padding: 7px;
  width: 300px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;
const Separator = styled.hr`
  margin: 0px;
`;

const Ostoskori = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Wrapper>
        <Top>
          <TopHeader>
            <Title>Ostoskorisi</Title>
            <TopButton onClick={() => navigate("/tuotteet")}>
              Jatka Ostoksia
            </TopButton>
          </TopHeader>
          <TopTexts>
            <TopTextTuote>Tuote</TopTextTuote>
            <TopTextYhteensä>Yhteensä</TopTextYhteensä>
          </TopTexts>
          <Separator />
        </Top>
        <Center>
          <Product>
            <ProductDetails>
              <Image src={orangeDress} />
              <Details>
                <ProductName>
                  <b>Nimi:</b> Oranssi mekko
                </ProductName>
                <ProductPrice>
                  <b>Hinta:</b> €39,00
                </ProductPrice>
              </Details>
            </ProductDetails>
            <ProductAmountContainer>
              <DeleteIcon />
            </ProductAmountContainer>
            <ProductPriceTotal>€39,00</ProductPriceTotal>
          </Product>
          <Separator />
        </Center>
        <Bottom>
          <Separator />
          <Summary>
            <SummaryContainer>
              <SummaryTitle>Arvioitu kokonaishinta</SummaryTitle>
              <SummaryPrice>
                <b>€77,00</b>
              </SummaryPrice>
            </SummaryContainer>
            <SummaryDesc>
              Sisältää veron. Toimituskulut ja alennukset lasketaan kassalla.
            </SummaryDesc>
            <BottomButton onClick={() => navigate("/kassa")}>
              Siirry kassalle
            </BottomButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Ostoskori;
