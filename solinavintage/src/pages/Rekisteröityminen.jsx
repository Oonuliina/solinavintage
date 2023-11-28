import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { tablet, large } from "../responsive";
import { useNavigate } from "react-router-dom";

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
  ${tablet({ width: "65%" })}
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
    padding: 10px 30px;
    margin: 20px 30px;
    border: none;
    cursor: pointer;
`;
const BackToHomeButtom = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;

const Rekisteröityminen = () => {

  const navigate = useNavigate();

  const loggedIn = sessionStorage.getItem("loginToken");

  useEffect(() => {
    if (loggedIn) {
      document.location.replace("/");
    }
  }, []);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const Rekisteröi = async () => {
    const Sahkoposti = document.getElementById("email").value;
    const Password = document.getElementById("passw").value;


    if (Sahkoposti) {
      if (validateEmail(Sahkoposti)) {
        if (Password) {
          async function postUser(url = "", data = {}) {
            const resp = await fetch(url, {
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: { "Content-Type": "application/json", },
              body: JSON.stringify(data),
              referrerPolicy: "no-referrer",
            });
            return resp.json();
          };

          postUser("https://solina-server.onrender.com/rekisteroityminen", { Sahkoposti: Sahkoposti, Salasana: Password })
            .then((res) => {
              if (res === "Sähkoposti on jo käytössä!") {
                alert(res)
              } else {
                alert("Käyttäjätili on luotu!")
                navigate("/kirjautuminen");
              }
            });
        } else {
          alert("Kaikki kentät ovat pakollisia!")
        }
      } else {
        alert("Sähköposti on virheellinen!")
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
          <Input type="email" placeholder="Sähköposti" id="email" />
          <Input type="password" placeholder="Salasana" id="passw" />
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
