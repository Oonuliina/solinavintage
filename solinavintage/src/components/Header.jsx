import React, { useState } from "react";
import logo from "../assets/SolinaLogo.png";
import logoMobile from "../assets/SolinaLogoMobile.png";
import {
  ShoppingBag,
  MagnifyingGlass,
  User,
  SignOut,
} from "@phosphor-icons/react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mobile, tablet, large } from "../responsive";
import Burger from "./Burger";
import Search from "../components/Search";

const Container = styled.div`
  width: 100vw;
  border-bottom: 0.5px solid lightgray;
  padding-bottom: 20px;

  ${mobile({ paddingBottom: "0px" })}
`;
const UpperNavigation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
  margin-top: 30px;

  ${mobile({ padding: "5px 15px 5px 15px", marginTop: "10px" })}
`;
const UpperLeft = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

const UpperCenter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ flex: "2" })}
`;
const MobileLogo = styled.img`
  display: none;
  top: 0;

  ${mobile({ display: "flex", height: "50px!important" })}
  ${tablet({ display: "flex", height: "100px" })}
`;
const UpperRight = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  justify-content: end;
`;
const LoginIcon = styled.span`
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const LogoutIcon = styled.span`  
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const ShoppingContainer = styled.div``;
const ShoppingButton = styled.button`
  padding-left: 15px;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${mobile({ paddingLeft: "5px" })}
`;

const SearchIconButton = styled.button`
  position: relative;
  display: flex;
  cursor: pointer;
  border: none;
  z-index: 1;
  background: none;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  ${tablet({ display: "none" })}
`;

const LogoImage = styled.img`
  width: 350px;
  margin-left: 13px;

  &:hover {
    cursor: pointer;
  }
  ${tablet({ display: "none" })}
  ${large({ width: "300px" })}
`;
const NavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet({ display: "none" })}
`;
const NavItem = styled.a`
  margin-left: 15px;
  margin-right: 15px;
  font-size: 24px;
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
  color: white;
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
  font-size: 24px;
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

const Header = ({ cart }) => {

  const loggedIn = sessionStorage.getItem("loginToken");

  const [showModal, setShowModal] = useState(0);

  const navigate = useNavigate();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  let LoggedIn = {
    display: "none",
  };
  if (loggedIn) {
    LoggedIn = {
      display: "flex",
    };
  } else {
    LoggedIn = {
      display: "none",
    };
  }

  let LoggedOut = {
    display: "flex",
  };
  if (loggedIn) {
    LoggedOut = {
      display: "none",
    };
  } else {
    LoggedOut = {
      display: "flex",
    };
  }

  function logOut() {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Container>
        {showModal ? <Search setShowModal={setShowModal} /> : null}
        <UpperNavigation>
          <UpperLeft>
            <Burger />
            <SearchIconButton onClick={openModal}>
              <MagnifyingGlass size={35} weight="light" />
            </SearchIconButton>
          </UpperLeft>
          <UpperCenter>
            <MobileLogo
              src={logoMobile}
              onClick={() => navigate("/")}
            ></MobileLogo>
          </UpperCenter>
          <UpperRight>
            <LoginIcon style={LoggedOut}>
              <User
                onClick={() => navigate("/kirjautuminen")}
                size={32}
                weight="light"
              />
            </LoginIcon>
            <LogoutIcon style={LoggedIn}>
              <SignOut size={32} onClick={() => logOut()}/>
            </LogoutIcon>
            <ShoppingContainer>
              <ShoppingButton>
                <Badge badgeContent={cart.length} color="secondary">
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
          <LogoImage onClick={() => navigate("/")} src={logo} />
        </LogoContainer>
        <NavBar>
          <NavItem onClick={() => navigate("/")}>ETUSIVU</NavItem>
          <NavDrop>
            <NavButton onClick={() => navigate("/tuotteet")}>
              TUOTTEET
            </NavButton>
            <NavDropContent>
              <NavLink onClick={() => navigate("/tuotteet/mekot")}>
                Mekot
              </NavLink>
              <NavLink onClick={() => navigate("/tuotteet/kengat")}>
                Kengät
              </NavLink>
              <NavLink onClick={() => navigate("/tuotteet/laukut")}>
                Laukut
              </NavLink>
              <NavLink onClick={() => navigate("/tuotteet/takit")}>
                Takit
              </NavLink>
              <NavLink onClick={() => navigate("/tuotteet/korut")}>
                Korut
              </NavLink>
            </NavDropContent>
          </NavDrop>
          <NavItem onClick={() => navigate("/meista")}>MEISTÄ</NavItem>
        </NavBar>
      </Container>
    </>
  );
};

export default Header;
