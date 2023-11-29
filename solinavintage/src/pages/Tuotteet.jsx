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
import { mobile, tablet, large } from "../responsive";


const Tuotteet = ({ addToCart, cart }) => {
  /* Defining an empty variable for category */
  var category = "";
  /* Defining a variable which contains the full path */
  const fullpath = window.location.href;

  /* In the data file we basically have 6 different JSON files.
  Here we check if the full path has any of the categories at the end and set the category variable to that category */
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
    /* If none of the 5 specific categories were found in the full path... 
    ...we set the category variable to products which in the data file contains all of the products */
    category = products;
  }

  /* Another way to accomplish getting the category out of the path (a cleaner way) */
  const location = useLocation();
  const cat = location.pathname.split(/[/]+/).pop();
  /* This method we use to get the titles on the page to show the correct categories.
  This variable is the category with uppercase first letter */
  var modCat = cat[0].toUpperCase() + cat.slice(1);

  /* Because in some places we don't like ÖÄÅ here we change the a to ä if the category is Kengät (Finnish for shoes) */
  if (modCat === "Kengat") {
    modCat = "Kengät";
  }

  /* State variable for modal */
  const [showModal, setShowModal] = useState(0);
  /* Handle opening and closing the modal */
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  /* State variable for filters */
  const [filters, setFilters] = useState({});
  /* State variable for sorting by price */
  const [sort, setSort] = useState("price asc");

  /* Function for handling filters */
  const handleFilters = (e) => {
    /* Getting the name and value of the currently selected option */
    const { name, value } = e.target;
    /* If the value is a default value return the category otherwise return value */
    const filterValue = value === "Väri" || value === "Koko" ? cat : value;
    /* Change state variable to currently selected filter */
    setFilters({
      ...filters,
      [name]: filterValue,
    });
  };

  /* Functon to clear filters */
  const clearFilters = () => {
    setFilters({});
  };

  /* State variables for available size and color options */
  const [availableOptionsSize, setAvailableOptionsSize] = useState([]);
  const [availableOptionsColor, setAvailableOptionsColor] = useState([]);
  
  /* This function takes out duplicate filter options and is rerun if filters or category changes */
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

  /* State variable to show how many items are currently shown on the page */
  var [totalShownItems, setTotalShownItems] = useState(category.length);
  /* Defining delay */
  const delay = ms => new Promise(res => setTimeout(res, ms));
  /* Function that waits 0,1s before calculating how many items are shown on the page.
  We have to wait because if this function runs at the same time as page is rendering it will not find the items on the page and runs into an error */
  async function setCorrectAmount(){
    await delay(100);
    var prods = document.getElementById("prods");
    if(!prods){
      setTotalShownItems(0);
    } else {
      setTotalShownItems(prods.children.length);
    }
  }
  setCorrectAmount()

  return (
    <Container>
      {showModal ? (
        <FilterModalContainer>
          <FilterModalTop>
            <FilterModalTopLeft></FilterModalTopLeft>
            <FilterModalTopCenter>
              <FiltermodalTopText>Suodatus</FiltermodalTopText>
              <AmountOfProducts>
                <NumberTotal>{category.length}</NumberTotal>
                <Desc>tuotetta</Desc>
              </AmountOfProducts>
            </FilterModalTopCenter>
            <FilterModalTopRight>
              <CloseModalButton onClick={() => setShowModal((prev) => !prev)}>
                <X size={32} weight="light" />
              </CloseModalButton>
            </FilterModalTopRight>
          </FilterModalTop>
          <FilterModalCenter>
          <ModalFilter>
            <ModalSelect defaultValue="Väri" name="color" onChange={handleFilters}>
              <Option>Väri</Option>
              {/* Map avaialble options, remove empty options and then return an option component for each */}
              {availableOptionsColor.map((option) => (
                option === undefined ? null : (<Option key={option}>{option}</Option>) 
              ))}
            </ModalSelect>
            <ModalSelect name="size">
              <Option>Koko</Option>
              {/* Map avaialble options, remove empty options and then return an option component for each */}
              {availableOptionsSize.map((option) => (
                option === undefined ? null : (<Option key={option}>{option}</Option>) 
              ))}
            </ModalSelect>
          </ModalFilter>
          <ModalSort>
            <ModalSortText>Lajittelu:</ModalSortText>
            <ModalSelect onChange={(e) => setSort(e.target.value)}>
              <Option value="asc">Hinta pienimmästä suurimpaan</Option>
              <Option value="desc">Hinta suurimmasta pienimpään</Option>
            </ModalSelect>
          </ModalSort>
          </FilterModalCenter>
          <FilterModalBottom>
            <ModalClearButton onClick={clearFilters}>Tyhjennä</ModalClearButton>
          </FilterModalBottom>
        </FilterModalContainer>
      ) : null}
      <Announcement />
      <Header cart={cart} />
      <Title>{modCat}</Title>
      <FiltersContainer>
        <Left>
          <FilterTextLeft>
            <FilterIcon onClick={openModal}>
              <Funnel size={20} weight="light" />
            </FilterIcon>
            Suodatus:
          </FilterTextLeft>
          <Filter>
            <Select defaultValue="Väri" name="color" onChange={handleFilters}>
              <Option>Väri</Option>
              {/* Map avaialble options, remove empty options and then return an option component for each */}
              {availableOptionsColor.map((option) => (
                option === undefined ? null : (<Option key={option}>{option}</Option>) 
              ))}
            </Select>
            <Select defaultValue="Koko" name="size" onChange={handleFilters}>
              <Option>Koko</Option>
              {/* Map avaialble options, remove empty options and then return an option component for each */}
              {availableOptionsSize.map((option) => (
                option === undefined ? null : (<Option key={option}>{option}</Option>) 
              ))}
            </Select>
          </Filter>
          <ClearButton onClick={clearFilters}>Tyhjennä</ClearButton>
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
            <NumberTotal>{totalShownItems}</NumberTotal>
            <Desc>tuotetta</Desc>
          </AmountOfProducts>
        </Right>
      </FiltersContainer>
      <Products addToCart={addToCart} filters={filters} sort={sort}/>
      <Footer />
    </Container>
  );
};

export default Tuotteet;


const Container = styled.div``;

const FiltersContainer = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;

  ${large({ display: "flex" })}
`;
const Title = styled.h1`
  font-size: 35px;
  align-text: left;
  padding-left: 3%;
  padding-right: 3%;

  ${tablet({ fontSize: "30px" })}
  ${mobile({ fontSize: "25px", marginTop: "30px", marginBottom: "35px" })}
`;

/* Filter modal*/
const FilterModalContainer = styled.div`
  height: 50vh;
  width: 80vw;
  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 6;
  background-color: white;
  overflow: auto;
  border: 0.5px solid lightgray;
`;
/* Filter modal top*/
const FilterModalTop = styled.div`
  flex: 1;
  display: flex;
  border-bottom: 0.5px solid lightgray;
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
const CloseModalButton = styled.button`
  border: none;
  background: none;
  margin-left: 20px;
`;
/* Filter modal center*/

const FilterModalCenter = styled.div`
  flex: 3;
  margin: 15px;
`;
const ModalSelect = styled.select`
  border: none;
  font-size: 15px;
  padding-bottom: 20px;
`;

const ModalSortText = styled.span`
  font-size: 15px;
  padding-bottom: 10px;
`;
const ModalFilter = styled.div`
  display: flex;
  flex-direction: column;
`;
const ModalSort = styled.div`
  display: flex;
  flex-direction: column;
 
`;

/*Filter modal bottom*/
const FilterModalBottom = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.5px solid lightgray;
`;

const ModalClearButton = styled.button`
  border: none;
  background-color: #222222;
  cursor: pointer;
  color: whitesmoke;
  padding: 15px 30px;
  margin: 0px 10px 0px 10px;
  border-radius: 30px;
`;

/*Main page*/
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Filter = styled.div`
  ${large({ display: "none" })}
`;

const FilterIcon = styled.span`
  display: none;
  ${large({ display: "flex" })}
`;
const FilterTextLeft = styled.span`
  font-size: 20px;
  ${large({ display: "flex" })}
  ${mobile({ fontSize: "17px" })}
`;
const FilterTextRight = styled.span`
  font-size: 20px;
  ${large({ display: "none" })}
`;
const Select = styled.select`
  padding: 5px;
  font-size: 20px;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NumberTotal = styled.span`
  font-size: 20px;
  ${mobile({ fontSize: "17px" })}
`;
const Desc = styled.span`
  font-size: 20px;
  padding-left: 10px;
  ${mobile({ fontSize: "17px" })}
`;

const ClearButton = styled.button`
  border: none;
  background-color: #222222;
  color: white;
  border-radius: 30px;
  font-size: 18px;
  padding: 5px 20px 5px 20px;

  ${large({ display: "none" })}
`;