import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 10px;
    height: 35px;
  }
`;

const Announcement = () => {
  return <Container>Ilmainen toimitus yli 100€ ostoksille Suomessa!</Container>;
};

export default Announcement;
