import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import { large, tablet } from "../responsive";
import { products } from "../data";

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

  const fullpath = window.location.href;
  const itemId = fullpath.split(/[/]+/).pop();
  const item = products.find(i => i.id == itemId);

  return (
    <Container>
      <Announcement />
      <Header />
      <Wrapper>
        <ImgContainer>
          <Image src={item.img}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>
            {item.desc}
          </Desc>
          <Price>{item.price}</Price>
          <Button>Lisää ostoskoriin</Button>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Tuote;
