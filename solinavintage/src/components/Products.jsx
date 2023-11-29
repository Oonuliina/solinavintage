import { products } from "../data";
import { takit } from "../data";
import { mekot } from "../data";
import { korut } from "../data";
import { kengat } from "../data";
import { laukut } from "../data";
import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  ${mobile({ padding: "11px"})}
`;
const Message = styled.h1`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 70px;
`;

const Products = ({ addToCart, filters, sort }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  useEffect(() => {
    category &&
      setFilteredProducts(
        category.filter((item) =>
          Object.entries(filters).every(([key, value]) => item[key] === value)
        )
      );
  }, [category, filters]);

  useEffect(() => {
    if (sort === "price asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  if (filteredProducts.length === 0) {
    return <Message>Tuotteita ei löytynyt</Message>;
  }

  return (
    <Container id="prods">
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} addToCart={addToCart} />
      ))}
    </Container>
  );
};

export default Products;
