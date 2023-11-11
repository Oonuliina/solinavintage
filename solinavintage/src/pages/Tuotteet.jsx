import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Products from '../components/Products'
import Announcement from '../components/Announcement'
import styled from 'styled-components'


const Container = styled.div`
  display:flex;
  flex-direction: column;
`;
const Title = styled.h1`
font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 165px;
  height: 200px;
`;
const Left = styled.div``;

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
const Option = styled.option`
  
`;
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
      <Title>Kaikki tuotteet</Title>
      <FilterContainer>
        <Left>
        <Filter><FilterText>Suodatus:</FilterText>
        <Select>
          <Option disabled selected>Väri</Option>
          <Option>Valkoinen</Option>
          <Option>Musta</Option>
          <Option>Punainen</Option>
          <Option>Sininen</Option>
          <Option>Vihreä</Option>
          <Option>Keltainen</Option>
          <Option>Oranssi</Option>
          <Option>Lila</Option>
          <Option>Ruskea</Option>
          <Option>Harmaa</Option>
          <Option>Kultainen</Option>
          <Option>Hopea</Option>
          </Select>
          <Select>
          <Option disabled selected>Koko</Option>
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
        <Filter><FilterText>Lajittelu:</FilterText>
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
      <Products />
      <Footer />
    </Container>
  )
}

export default Tuotteet