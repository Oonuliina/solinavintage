import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import orangeDress from "../assets/dresses/orange_dress.JPG";
import whiteHeels from "../assets/shoes/white_heels.jpg";
import pearlEarrings from "../assets/accessories/earring_pearls.jpg";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Top = styled.div`
  padding: 20px, 20px, 0px, 20px;
`;
const Title = styled.h1`
  font-size: 40px;
  text-align: left;
  font-wight: 300;
  margin: 0px 0px;
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
const TopTextMäärä = styled.p`
  flex: 1;
  text-align: left;
  font-size: 10px;
`;
const TopTextYhteensä = styled.p`
  flex: 1;
  text-align: center;
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
  justify-content: left;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
  padding: 3px;
  margin-right: 40px;
`;
const Amount = styled.p`
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
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
  margin: 0px 20px 0px 20px;
`;
const Ostoskori = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Top>
          <TopHeader>
            <Title>Ostoskorisi</Title>
            <TopButton>Jatka Ostoksia</TopButton>
          </TopHeader>
          <TopTexts>
            <TopTextTuote>Tuote</TopTextTuote>
            <TopTextMäärä>Määrä</TopTextMäärä>
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
              <AmountContainer>
                <RemoveIcon />
                <Amount>1</Amount>
                <AddIcon />
              </AmountContainer>
              <DeleteIcon />
            </ProductAmountContainer>
            <ProductPriceTotal>€39,00</ProductPriceTotal>
          </Product>
          <Separator />
          <Product>
            <ProductDetails>
              <Image src={whiteHeels} />
              <Details>
                <ProductName>
                  <b>Nimi:</b> Valkoiset korkokengät
                </ProductName>
                <ProductPrice>
                  <b>Hinta:</b> €29,00
                </ProductPrice>
              </Details>
            </ProductDetails>
            <ProductAmountContainer>
              <AmountContainer>
                <RemoveIcon />
                <Amount>1</Amount>
                <AddIcon />
              </AmountContainer>
              <DeleteIcon />
            </ProductAmountContainer>
            <ProductPriceTotal>€29,00</ProductPriceTotal>
          </Product>
          <Separator />
          <Product>
            <ProductDetails>
              <Image src={pearlEarrings} />
              <Details>
                <ProductName>
                  <b>Nimi:</b> Helmikorvakorut
                </ProductName>
                <ProductPrice>
                  <b>Hinta:</b> €9,00
                </ProductPrice>
              </Details>
            </ProductDetails>
            <ProductAmountContainer>
              <AmountContainer>
                <RemoveIcon />
                <Amount>1</Amount>
                <AddIcon />
              </AmountContainer>
              <DeleteIcon />
            </ProductAmountContainer>
            <ProductPriceTotal>€9,00</ProductPriceTotal>
          </Product>
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
            <BottomButton>Siirry kassalle</BottomButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Ostoskori;
