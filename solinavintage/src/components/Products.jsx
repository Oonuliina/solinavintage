import { dresses } from "../data";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 40px;
  display: flex;
  flex-direction: column;
`;
const Products = () => {
  return (
    <Container>
      <Title>Mekkoja</Title>
      <Wrapper>
      {dresses.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
