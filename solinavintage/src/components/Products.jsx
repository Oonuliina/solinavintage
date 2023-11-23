import { products } from "../data";
import { takit } from "../data";
import { mekot } from "../data";
import { korut } from "../data";
import { kengat } from "../data";
import { laukut } from "../data";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 380px) {
    padding: 11px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-left: 0px;
  }
`;

const Products = ({addToCart}) => {
  
  var category = "";
  const fullpath = window.location.href;
  if (fullpath.includes("takit")){
    category = takit
  } else if (fullpath.includes("mekot")) {
    category = mekot
  } else if (fullpath.includes("korut")) {
    category = korut
  } else if (fullpath.includes("kengat")) {
    category = kengat
  } else if (fullpath.includes("laukut")) {
    category = laukut
  } else {
    category = products
  }

  return (
    <Container>
      {category.map((item) => (
        <Product item={item} key={item.id} addToCart={addToCart}/>
      ))}
    </Container>
  );
};

export default Products;
