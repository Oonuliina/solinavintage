import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const TitleAndFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 40px;
  align-text: left;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 25px;
`;
const Left = styled.div`
  display: flex;
`;

const Filter = styled.div``;
const FilterText = styled.span`
  font-size: 15px;
`;
const Select = styled.select`
  padding: 5px;
  font-size: 15px;
  border: none;
  color: gray;
  margin: 0px 8px;
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`;
const Option = styled.option``;
const Right = styled.div`
  display: flex;
`;
const AmountOfProducts = styled.div`
  padding-left: 10px;
`;
const NumberTotal = styled.span`
  font-size: 15px;
`;
const Desc = styled.span`
  font-size: 15px;
  padding-left: 10px;
`;

const Tuotteet = () => {
  return (
    <Container>
      <Announcement />
      <Header />
      <Wrapper>
        <TitleAndFiltersContainer>
          <Title>Kaikki tuotteet</Title>
          <FilterContainer>
            <Left>
              <Filter>
                <FilterText>Suodatus:</FilterText>
                <Select>
                  <Option disabled selected>
                    Väri
                  </Option>
                  <Option>valkoinen</Option>
                  <Option>musta</Option>
                  <Option>punainen</Option>
                  <Option>sininen</Option>
                  <Option>vihreä</Option>
                  <Option>keltainen</Option>
                  <Option>oranssi</Option>
                  <Option>lila</Option>
                  <Option>ruskea</Option>
                  <Option>harmaa</Option>
                  <Option>beige</Option>
                  <Option>roosa</Option>
                  <Option>monivärinen</Option>
                  <Option>kultainen</Option>
                  <Option>hopea</Option>
                </Select>
                <Select>
                  <Option disabled selected>
                    Koko
                  </Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
                  <Option>XXL</Option>
                </Select>
              </Filter>
            </Left>
            <Right>
              <Filter>
                <FilterText>Lajittelu:</FilterText>
                <Select>
                  <Option>Hinta pienimmästä suurimpaan</Option>
                  <Option>Hinta suurimmasta pienimpään</Option>
                </Select>
              </Filter>
              <AmountOfProducts>
                <NumberTotal>9</NumberTotal>
                <Desc>tuotetta</Desc>
              </AmountOfProducts>
            </Right>
          </FilterContainer>
        </TitleAndFiltersContainer>
        <Products />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Tuotteet;
