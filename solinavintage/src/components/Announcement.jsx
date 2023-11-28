import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 40px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;

  ${tablet({ fontSize: "12px", height: "35px" })}

`;

const Announcement = () => {
  return <Container>Ilmainen toimitus yli 100€ ostoksille Suomessa!</Container>;
};

export default Announcement;
