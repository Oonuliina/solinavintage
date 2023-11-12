import { dresses } from "../data";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px 150px 20px 150px;
`;

const Products = () => {
  return (
    <Container>
        {dresses.map((item) => (
          <Product item={item} key={item.id} />
        ))}
    </Container>
  );
};

export default Products;
