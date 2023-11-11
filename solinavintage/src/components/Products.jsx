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
const Products = () => {
  return (
    <Container>
      <Wrapper>
        {dresses.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
