import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Funnel, X } from "@phosphor-icons/react";
import { products } from "../data";
import { takit } from "../data";
import { mekot } from "../data";
import { korut } from "../data";
import { kengat } from "../data";
import { laukut } from "../data";

const Container = styled.div``;

const FiltersContainer = styled.div`
  padding-left: 3%;
  padding-right: 3%;

  @media only screen and (max-width: 380px) {
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  align-text: left;
  padding-left: 3%;
  padding-right: 3%;

  @media only screen and (max-width: 380px) {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

const FilterModalContainer = styled.div`
  height: 100vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background-color: white;
  overflow: auto;
`;

const FilterModalTop = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
`;
const FilterModalBottom = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FiltermodalTopText = styled.span`
  font-size: 13px;
  font-weight: 100;
  color: gray;
`;
const FilterModalTopLeft = styled.div`
  flex: 1;
`;
const FilterModalTopCenter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FilterModalTopRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalSelect = styled.select`
  border: none;
`;
const ModalFilterTextLeft = styled.span`
  font-size: 12px;
`;
const ModalFilterTextRight = styled.span`
  font-size: 12px;
`;
const CloseModalButton = styled.button`
  border: none;
  background: none;
  margin-left: 20px;
`;
const ModalFilter = styled.div``;
const RemoveFiltersButton = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px 0px 10px;
`;
const UseFiltersButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 1px;
  color: whitesmoke;
  padding: 10px;
  cursor: pointer;
  width: 100px;
  margin: 0px 10px 0px 10px;
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

const FilterIcon = styled.span`
  display: none;

  @media only screen and (max-width: 380px) {
    display: flex;
  }
`;
const FilterTextLeft = styled.span`
  font-size: 15px;

  @media only screen and (max-width: 380px) {
    display: flex;
    cursor: pointer;
  }
`;
const FilterTextRight = styled.span`
  font-size: 15px;

  @media only screen and (max-width: 380px) {
    display: none;
  }
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
  @media only screen and (max-width: 380px) {
    display: none;
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
const Separator = styled.hr`
  width: 100%;
  border: none;
  background-color: lightgray;
  height: 0.5px;
`;
const Tuotteet = ({ addToCart, cart }) => {
  var category = "";
  const fullpath = window.location.href;

  if (fullpath.includes("takit")) {
    category = takit;
  } else if (fullpath.includes("mekot")) {
    category = mekot;
  } else if (fullpath.includes("korut")) {
    category = korut;
  } else if (fullpath.includes("kengat")) {
    category = kengat;
  } else if (fullpath.includes("laukut")) {
    category = laukut;
  } else {
    category = products;
  }

  const location = useLocation();
  const cat = location.pathname.split(/[/]+/).pop();
  var modCat = cat[0].toUpperCase() + cat.slice(1);

  if (modCat === "Kengat") {
    modCat = "Kengät";
  }

  const [showModal, setShowModal] = useState(0);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("price asc");

  const handleFilters = (e) => {
    const { name, value } = e.target;
    const filterValue = value === "Väri" || value === "Koko" ? cat : value;
    setFilters({
      ...filters,
      [name]: filterValue,
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  const [availableOptionsSize, setAvailableOptionsSize] = useState([]);
  const [availableOptionsColor, setAvailableOptionsColor] = useState([]);

  useEffect(() => {
    const getAvailableOptions = (filter) => {
      switch (filter) {
        case "color":
          return category
            .filter((item) =>
              filters.size ? item.size === filters.size : true
            )
            .map((item) => item.color)
            .filter((value, index, self) => self.indexOf(value) === index);
        case "size":
          return category
            .filter((item) =>
              filters.color ? item.color === filters.color : true
            )
            .map((item) => item.size)
            .filter((value, index, self) => self.indexOf(value) === index);
        default:
          return [];
      }
    };

    setAvailableOptionsColor(getAvailableOptions("color"));
    setAvailableOptionsSize(getAvailableOptions("size"));
  }, [category, filters]);

  return (
    <Container>
      {showModal ? (
        <FilterModalContainer>
          <FilterModalTop>
            <FilterModalTopLeft></FilterModalTopLeft>
            <FilterModalTopCenter>
              <FiltermodalTopText>Suodatus</FiltermodalTopText>
              <AmountOfProducts>
                <NumberTotal>9</NumberTotal>
                <Desc>tuotetta</Desc>
              </AmountOfProducts>
            </FilterModalTopCenter>
            <FilterModalTopRight>
              <CloseModalButton onClick={() => setShowModal((prev) => !prev)}>
                <X size={32} weight="light" />
              </CloseModalButton>
            </FilterModalTopRight>
          </FilterModalTop>
          <Separator />
          <ModalFilter>
            <ModalFilterTextLeft>Suodatus:</ModalFilterTextLeft>
            <ModalSelect name="color">
              <Option>Väri</Option>
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
            </ModalSelect>
            <ModalSelect name="size">
              <Option>Koko</Option>
              {availableOptionsSize.map((option) => (
                <Option key={option}>{option}</Option>
              ))}
            </ModalSelect>
          </ModalFilter>
          <ModalFilter>
            <ModalFilterTextRight>Lajittelu:</ModalFilterTextRight>
            <ModalSelect>
              <Option value="asc">Hinta pienimmästä suurimpaan</Option>
              <Option value="desc">Hinta suurimmasta pienimpään</Option>
            </ModalSelect>
          </ModalFilter>
          <Separator />
          <FilterModalBottom>
            <RemoveFiltersButton>Poista Kaikki</RemoveFiltersButton>
            <UseFiltersButton>Käytä</UseFiltersButton>
          </FilterModalBottom>
        </FilterModalContainer>
      ) : null}
      <Announcement />
      <Header cart={cart} />
      <Title>{modCat}</Title>
      <FiltersContainer>
        <FilterContainer>
          <Left>
            <Filter>
              <FilterTextLeft>
                <FilterIcon onClick={openModal}>
                  <Funnel size={20} weight="light" />
                </FilterIcon>
                Suodatus:
              </FilterTextLeft>
              <Select defaultValue="Väri" name="color" onChange={handleFilters}>
                <Option>Väri</Option>
                {availableOptionsColor.map((option) => (
                  <Option key={option}>{option}</Option>
                ))}
              </Select>
              <Select defaultValue="Koko" name="size" onChange={handleFilters}>
                <Option>Koko</Option>
                {availableOptionsSize.map((option) => (
                  <Option key={option}>{option}</Option>
                ))}
              </Select>
            </Filter>
            <button onClick={clearFilters}>Clear Filters</button>
          </Left>
          <Right>
            <Filter>
              <FilterTextRight>Lajittelu:</FilterTextRight>
              <Select onChange={(e) => setSort(e.target.value)}>
                <Option value="price asc">Hinta pienimmästä suurimpaan</Option>
                <Option value="price desc">Hinta suurimmasta pienimpään</Option>
              </Select>
            </Filter>
            <AmountOfProducts>
              <NumberTotal>9</NumberTotal>
              <Desc>tuotetta</Desc>
            </AmountOfProducts>
          </Right>
        </FilterContainer>
      </FiltersContainer>
      <Products addToCart={addToCart} filters={filters} sort={sort} />

      <Footer />
    </Container>
  );
};

export default Tuotteet;
