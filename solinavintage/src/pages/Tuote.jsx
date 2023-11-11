import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import longPurpleDress from "../assets/dresses/long_purple_dress.JPG";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div``;
const Wrapper = styled.div`
  margin-top: 50px;
  padding 50px;
  display: flex;
  margin-bottom: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 70%;
  height: 80vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 25px;
  text-align: left;
`;
const Title = styled.h1`
  margin-top: 0;
  font-size: 40px;
  font-weight: 400;
`;
const Desc = styled.p`
  font-size: 20px;
`;
const Price = styled.p`
  font-size: 20px;
  font-weight: 200;
  margin: 0px auto;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: left;
  flex-direction: column;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 30px;
  padding: 3px;
`;
const Amount = styled.span`
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  font-wight: 200px;
  padding: 10px;
  width: 100%;
  background-color: white;
  border: 1px solid gray;
  color: gray;
  border-radius: 5px;
  cursor: pointer;
`;

const Tuote = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <ImgContainer>
          <Image src={longPurpleDress} />
        </ImgContainer>
        <InfoContainer>
          <Title>Pitkä lila iltapuku</Title>
          <Price>89 €</Price>
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
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>Lisää ostoskoriin</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Tuote;
