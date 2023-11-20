import { products } from "../data";
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

const RandomProducts = () => {

    const randomProduct = products.sort(() => Math.random() - Math.random());

    return (
    <Container>
      {randomProduct.slice(0, 4).map((randomProduct) => (
        <Product item={randomProduct} key={randomProduct.id} />
      ))}
    </Container>
  );
};

export default RandomProducts;
