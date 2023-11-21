import { Link } from "react-router-dom";
import styled from "styled-components";
import React, {useState} from 'react';

/* import axios from 'axios';
import { response } from "express"; */

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
const Form = styled.div`
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

  /* const [Sähköposti, setSähköposti] = useState('');
  const [Salasana, setSalasana] = useState('');

  const Rekisteröi = async () => {
    try { const vastaus = await axios.post('http//localhost:3000/rekisteröinti', {Sähköposti, Salasana});
    console.log(response)

    } catch(error) {
    console.error(error.response.data.error);
    }
  } */

  const Rekisteröi = async () => {
    const Sahkoposti = document.getElementById("email").value;
    const Password = document.getElementById("passw").value;
    
    if (Sahkoposti){
      if (Password){
        async function postUser(url="", data={}){
          const resp = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(data),
            referrerPolicy: "no-referrer",
          });
          return resp.json();
        };

        postUser("http://localhost:5000/rekisteroityminen", {Sahkoposti: Sahkoposti, Salasana: Password})
        .then((res) => {
          if (res === "Sähkoposti on jo käytössä!"){
            alert(res)
          }
        });
      } else {
        alert("Kaikki kentät ovat pakollisia!")
      }
    } else {
      alert("Kaikki kentät ovat pakollisia!")
    }

  }

  return (
    <Container>
      <Wrapper>
        <Title>Luo tili</Title>
        <Form>
          <Input type="text" placeholder="Sähköposti" id="email"/>
          <Input type="password" placeholder="Salasana" id="passw"/>
          <CreateAccountButton onClick={Rekisteröi}>Luo</CreateAccountButton>
          <Link to={"/"}>
          <BackToHomeButtom>Palaa etusivulle</BackToHomeButtom>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Rekisteröityminen;
