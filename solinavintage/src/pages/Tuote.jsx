import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import longPurpleDress from "../assets/dresses/long_purple_dress.JPG";
import Announcement from "../components/Announcement";


const Container = styled.div``;
const Wrapper = styled.div`
  margin-top: 50px;
  padding 50px;
  display: flex;
  margin-bottom: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0px 0px 0px 350px;
`;
const Image = styled.img`
  width: 600px;
  height: 70vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 350px 0px 50px;
  text-align: left;
`;
const Title = styled.h1`
  margin-top: 0;
  font-size: 40px;
  font-weight: 400;
`;
const Desc = styled.p`
  font-size: 17px;
`;
const Price = styled.p`
  font-size: 20px;
  font-weight: 200;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: left;
  flex-direction: column;
`;
const Button = styled.button`
  font-size: 20px;
  font-weight: 100;
  padding: 10px;
  width: 100%;
  background-color: black;
  border: 1px solid gray;
  color: white;
  border-radius: 30px;
  cursor: pointer;
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
          <Price>€89,00</Price>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Desc>
          <AddContainer>
            <Button>Lisää ostoskoriin</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Tuote;
