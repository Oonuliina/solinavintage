import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/33678/vintage-1950s-pretty-woman-vintage-car-1955-montclair.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 5px lightgray;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 200;
  text-align: center;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    min-width: 70%;
    margin: 20px 0px;
    padding: 20px;
`;
const CreateAccountButton = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
    margin: 20px 0px;
    width: 20%;
    border: none;
    cursor: pointer;
`;
const BackToHomeButtom = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;

const Rekisteröityminen = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Luo tili</Title>
        <Form>
          <Input placeholder="Sähköposti" />
          <Input placeholder="Salasana" />
          <CreateAccountButton>Luo</CreateAccountButton>
          <Link to={"/"}>
          <BackToHomeButtom>Palaa etusivulle</BackToHomeButtom>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Rekisteröityminen;
