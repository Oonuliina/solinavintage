import { products } from "../data";
import styled from "styled-components";
import Product from "./Product";



const RandomProducts = ({addToCart}) => {

  /* Define a variable that we sort all products from the data file at random */
  const randomProduct = products.sort(() => Math.random() - Math.random());

  /* Return first 10 of the randomly sorted products */
  return (
  <Container>
    {randomProduct.slice(0, 10).map((randomProduct) => (
      <Product item={randomProduct} key={randomProduct.id} addToCart={addToCart}/>
    ))}
  </Container>
  );
};

export default RandomProducts;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
 

  @media only screen and (max-width: 480px) {
    padding: 11px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-left: 0px;
  }
`;
