import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import longPurpleDress from "../assets/dresses/long_purple_dress.JPG";
import Announcement from "../components/Announcement";
import { large, tablet } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  margin-top: 50px;
  padding 50px;
  display: flex;
  margin-bottom: 50px;

  ${tablet({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;

  ${large({ padding: "0px 0px 0px 25px" })}
  ${tablet({
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 0px 20px 0px",
  })}
`;
const Image = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;

  ${large({ height: "400px" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px 0px 50px;
  text-align: left;

  ${large({ padding: "0px 25px 0px 25px" })}
  ${tablet({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "350px",
  })}
`;
const Title = styled.h1`
  margin-top: 0;
  font-size: 40px;
  font-weight: 400;

  ${large({ fontSize: "30px" })}
`;
const Desc = styled.p`
  font-size: 17px;

  ${large({ fontSize: "15px" })}
`;
const Price = styled.p`
  font-size: 20px;
  font-weight: 200;
`;
const Button = styled.button`
  font-size: 17px;
  font-weight: 100;
  padding: 10px;
  width: 200px;
  background-color: black;
  border: 1px solid gray;
  color: white;
  border-radius: 30px;
  cursor: pointer;

  ${large({ fontSize: "15px" })}
`;

const Tuote = () => {
  return (
    <Container>
      <Announcement />
      <Header />
      <Wrapper>
        <ImgContainer>
          <Image src={longPurpleDress} />
        </ImgContainer>
        <InfoContainer>
          <Title>Pitkä lila iltapuku</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </Desc>
          <Price>€89,00</Price>
          <Button>Lisää ostoskoriin</Button>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Tuote;
