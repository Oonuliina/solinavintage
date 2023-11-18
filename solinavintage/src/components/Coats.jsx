import { coats } from "../data";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-left: 135px;

  @media only screen and (max-width: 380px) {
    padding: 11px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-left: 0px;
  }
`;

const Coats = () => {

  return (
    <Container>
      {coats.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Coats;
