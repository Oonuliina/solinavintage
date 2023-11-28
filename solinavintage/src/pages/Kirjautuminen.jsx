import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet, mobile, large } from "../responsive";
/* import PropTypes from 'prop-types'; */
import React, { useState, useEffect } from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/9260836/pexels-photo-9260836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 500px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  ${tablet({ width: "65%"})}
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

const LoginButton = styled.button`
    background-color: black;
    color: white;
    padding: 10px 30px;
    margin: 20px 30px;
    border: none;
    cursor: pointer;
`;
const CreateAccountButton = styled.button`
    border: none;
    font-size: 17px;
    background: none;
    text-decoration: underline;
    cursor: pointer;
`;
const BackToHomeButtom = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    padding: 10px;
`;

async function loginUser(credentials){
  return fetch('https://solina-server.onrender.com/kirjautuminen', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

async function getCart(user){
  return fetch('https://solina-server.onrender.com/haekori', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  }).then(data => data.json())
}

async function gettingCart(user){
  await getCart({
      user
  }).then(res => {
    sessionStorage.setItem(res.cartId, JSON.stringify(res.cartItems));
  })
}

const Kirjautuminen = ({ setLoginToken}) => {

  const loggedIn = sessionStorage.getItem("loginToken");

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const waitThenRedirect= async () => {
    await delay(1500);
    document.location.replace("/");
  }

  useEffect(() => {
    if(loggedIn){
      document.location.replace("/");
    }
  },[]);

  const [email, setEmail] = useState();
  const [passwo, setPasswo] = useState();

  const handleLogin = async e => {
    e.preventDefault();
    await loginUser({
      email,
      passwo
    }).then((res) => {
      if (res === "Sähköpostia ei ole rekisteröity!"){
        alert(res)
      } else {
        if (res === "Salasana on väärin!") {
          alert(res)
        } else {
          let user = email;
          setLoginToken(res.token)
          gettingCart(user);
          waitThenRedirect();
        }
      }
    });
  }

  return (    
    <Container>
        <Wrapper>
            <Form>
              <Title>Kirjaudu sisään</Title>
              <Input type="text" placeholder="Sähköposti" onChange={e => setEmail(e.target.value)}/>
              <Input type="password" placeholder="Salasana" onChange={e => setPasswo(e.target.value)}/>
              <LoginButton onClick={handleLogin}>Kirjaudu sisään</LoginButton>
              <Link to={"/rekisteröityminen"}>
                <CreateAccountButton>Luo tili</CreateAccountButton>
              </Link>
              <Link to={"/"}>
                <BackToHomeButtom>Palaa etusivulle</BackToHomeButtom>
              </Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Kirjautuminen