import React, { useState } from "react";
import logo from "../assets/SolinaLogo.png";
import { ShoppingBag, MagnifyingGlass } from "@phosphor-icons/react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
`;
const UpperNavigation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
`;
const UpperLeft = styled.div`
  flex: 1;
`;
const UpperCenter = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const UpperRight = styled.div`
  flex: 1;
`;
const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;
const ShoppingButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background: transparent;
`;
const SearchContainer = styled.div`
  position: relative;
  border: ${(props) => (props.$searching ? 0.5 : 0)}px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  height: 35px;
  width: ${(props) => (props.$searching ? 360 : 40)}px;
  transition: all 0.5s ease;
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
const LogoImage = styled.img`
  width: 350px;
  margin-left: 13px;

  &:hover {
    cursor: pointer;
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
const Separator = styled.hr`
  margin: 20px 20px 0px 20px;
  border: none;
  background-color: lightgray;
  height: 1px;
`;
const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate()

  const _toggleSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <UpperNavigation>
        <UpperLeft>
          <SearchContainer $searching={isActive ? 1 : 0}>
            <Input />
            <SearchIconButton onClick={_toggleSearch}>
              {isActive ? (
                <MagnifyingGlass size={24} weight="light" />
              ) : (
                <MagnifyingGlass size={35} weight="light" />
              )}
            </SearchIconButton>
          </SearchContainer>
        </UpperLeft>
        <UpperCenter>
          <LogoContainer>
            <LogoImage onClick={() => navigate("/")} src={logo} />
          </LogoContainer>
        </UpperCenter>
        <UpperRight>
          <ShoppingContainer>
            <ShoppingButton>
              <Badge badgeContent={4} color="secondary">
                <ShoppingBag onClick={() => navigate("/ostoskori")} size={35} weight="light" />
              </Badge>
            </ShoppingButton>
          </ShoppingContainer>
        </UpperRight>
      </UpperNavigation>
      <NavBar>
        <NavItem onClick={() => navigate("/")}>ETUSIVU</NavItem>
        <NavItem onClick={() => navigate("/tuotteet")}>TUOTTEET</NavItem>
        <NavItem onClick={() => navigate("/meista")}>MEISTÄ</NavItem>
      </NavBar>
      <Separator />
    </Container>
  );
};

export default Header;
