import React, { useState } from "react";
import logo from "../assets/SolinaLogo.png";
import logoMobile from "../assets/SolinaLogoMobile.png";
import {
  ShoppingBag,
  MagnifyingGlass,
  User,
} from "@phosphor-icons/react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { mobile } from "../responsive";
import Burger from "./Burger";

const Container = styled.div`
  width: 100vw;
`;
const UpperNavigation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
  margin-top: 30px;

  ${mobile({ padding: "0px 5px 0px 5px", marginTop: "10px" })}
`;
const UpperLeft = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

const UpperCenter = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 380px) {
    flex: 2;
    font-size: 1px;
  }
`;
const TitleLogo = styled.h1`
  display: none;
  top: 0;

  @media only screen and (max-width: 380px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-top: 5px;
  }
`;
const UpperRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
const ShoppingButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background: transparent;
`;
const SearchModal = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  height: 200px;
  background: white;
  left: 0;
  top: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid;
  padding: 10px;
  box-shadow: 5px 2px #888888;
  overflow: auto; /* Enable scroll if needed */

  @media only screen and (max-width: 380px) {
    height: 40px;
    overflow: hidden;
  }
`;
const CloseModalButton = styled.button`
  height: 35px;
  font-size: 20px;
  font-weight: 100;
  border: none;
  width: 30px;
  background: none;
`;

const SearchContainer = styled.div`
  position: relative;
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  height: 35px;
  width: 360px;

  @media only screen and (max-width: 380px) {
    height: 20px;
    width: 70%;
    margin-left: 0px;
  }
`;
const Input = styled.input`
  position: alsolute;
  height: 25px;
  border: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border: 1px solid transparent;
`;
const SearchIconButton = styled.button`
  position: relative;
  display: flex;
  cursor: pointer;
  border: none;
  z-index: 1;
  background: none;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const Picture = styled.picture``;

const Source = styled.source``;

const LogoImage = styled.img`
  width: 350px;
  margin-left: 13px;

  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 380px) {
    display: none;
  }
`;
const NavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavItem = styled.a`
  margin-left: 15px;
  margin-right: 15px;
  font-size: 16px;
  color: #222222;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;
const NavDropContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const NavDrop = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${NavDropContent} {
    display: block;
  }
`;
const NavButton = styled.a`
  margin-left: 15px;
  margin-right: 15px;
  font-size: 16px;
  color: #222222;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

const NavLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;
const Separator = styled.hr`
  margin: 20px 20px 0px 20px;
  border: none;
  background-color: lightgray;
  height: 1px;

  @media only screen and (max-width: 380px) {
    margin: 5px 5px 0px 5px;
  }
`;
const Header = () => {
  const [showModal, setShowModal] = useState(0);

  const navigate = useNavigate();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      {showModal ? (
        <SearchModal
          $showmodal={showModal ? 1 : 0}
          $setshowmodal={setShowModal}
        >
          <SearchContainer>
            <Input />
            <SearchIconButton>
              <MagnifyingGlass size={24} weight="light" />
            </SearchIconButton>
          </SearchContainer>
          <CloseModalButton onClick={() => setShowModal((prev) => !prev)}>
            X
          </CloseModalButton>
        </SearchModal>
      ) : null}
      <UpperNavigation>
        <UpperLeft>
            <Burger />
          <SearchIconButton onClick={openModal}>
            <MagnifyingGlass size={35} weight="light" />
          </SearchIconButton>
        </UpperLeft>
        <UpperCenter>
          <TitleLogo onClick={() => navigate("/")}>Solina Vintage</TitleLogo>
        </UpperCenter>
        <UpperRight>
          <Link to={"/kirjautuminen"}>
            <User size={32} weight="light" />
          </Link>
          <ShoppingContainer>
            <ShoppingButton>
              <Badge badgeContent={4} color="secondary">
                <ShoppingBag
                  onClick={() => navigate("/ostoskori")}
                  size={35}
                  weight="light"
                />
              </Badge>
            </ShoppingButton>
          </ShoppingContainer>
        </UpperRight>
      </UpperNavigation>
      <LogoContainer>
        <Picture>
          <Source
            media="(max-width: 768px)"
            srcSet={logoMobile}
            sizes="768px"
          />
          <LogoImage onClick={() => navigate("/")} src={logo} />
        </Picture>
      </LogoContainer>
      <NavBar>
        <NavItem onClick={() => navigate("/")}>ETUSIVU</NavItem>
        <NavDrop>
          <NavButton onClick={() => navigate("/tuotteet")}>TUOTTEET</NavButton>
          <NavDropContent>
            <NavLink onClick={() => navigate("/tuotteet/mekot")}>Mekot</NavLink>
            <NavLink onClick={() => navigate("/tuotteet/kengat")}>Kengät</NavLink>
            <NavLink onClick={() => navigate("/tuotteet/laukut")}>Laukut</NavLink>
            <NavLink onClick={() => navigate("/tuotteet/takit")}>Takit</NavLink>
            <NavLink onClick={() => navigate("/tuotteet/korut")}>Korut</NavLink>
          </NavDropContent>
        </NavDrop>
        <NavItem onClick={() => navigate("/meista")}>MEISTÄ</NavItem>
      </NavBar>
      <Separator />
    </Container>
  );
};

export default Header;
