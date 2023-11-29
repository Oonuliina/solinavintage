import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { tablet } from "../responsive";

const Burger = () => {

  const [open, setOpen] = useState(false);

  const showMenu = () => setOpen(!open);

  const navigate = useNavigate();

  const [navSideOpen, setNavSideOpen] = useState(0);
  const openNavSide = () => {
    setNavSideOpen((curr) => !curr);
  };

  let showHideTuotteet = {
    display: "none",
  };
  if (navSideOpen) {
    showHideTuotteet = {
      display: "flex",
    };
  } else {
    showHideTuotteet = {
      display: "none",
    };
  }

  return (
    <>
    {/* Burger menu */}
      <StyledBurger open={open} onClick={showMenu}>
        <div />
        <div />
        <div />
      </StyledBurger>
      {/* side menu */}
      <SideMenu open={open}>
        <NavList>
          <NavItem onClick={() => navigate("/")}>ETUSIVU</NavItem>
          <NavButton onClick={openNavSide}>TUOTTEET</NavButton>
          <NavDropContentSide style={showHideTuotteet}>
            <NavLink onClick={() => navigate("/tuotteet")}>Tuotteet</NavLink>
            <NavLink onClick={() => navigate("/tuotteet/mekot")}>Mekot</NavLink>
            <NavLink onClick={() => navigate("/tuotteet/kengat")}>
              Kengät
            </NavLink>
            <NavLink onClick={() => navigate("/tuotteet/laukut")}>
              Laukut
            </NavLink>
            <NavLink onClick={() => navigate("/tuotteet/takit")}>Takit</NavLink>
            <NavLink onClick={() => navigate("/tuotteet/korut")}>Korut</NavLink>
          </NavDropContentSide>
          <NavItem onClick={() => navigate("/meista")}>MEISTÄ</NavItem>
        </NavList>
      </SideMenu>
    </>
  );
};

export default Burger;

/* Burger menu */
const StyledBurger = styled.div`
  display: none;
  position: relative;
  width; 2rem;
  height: 2rem;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  z-index: 5;

div {
width: 2rem;
height: 0.12rem;
background-color: ${({ open }) => (open ? "darkgray" : "#333")};
border-radius: 10px;
transform-origin: 1px;
transition: all 0.3s linear;

&:nth-child(1) {
transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
}
&:nth-child(2) {
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
  opacity: ${({ open }) => (open ? 0 : 1)};
}
&:nth-child(3) {
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
}
}

${tablet({ display: "flex" })}
`;
/* Side menu */
const SideMenu = styled.div`
  position: absolute;
  margin: 0;
  top: -10px;
  left: -10px;
  z-index: 4;
  display: ${({ open }) => (open ? "flex" : "none")};
`;
const NavList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  align-items: left;
  border: 0.5px solid;
  padding: 30px 20px 20px 40px;
  background-color: white;
  flex-direction: column;
`;
const NavLink = styled.li`
  margin-left: 15px;
  margin-right: 15px;
  font-size: 20px;
  color: #222222;
  cursor: pointer;
  padding: 5px;

  &:hover {
    font-weight: bold;
    background-color: whitesmoke;
    color: #222222;
  }
`;
const NavDropContentSide = styled.span`
  z-index: 3;
  flex-direction: column;
`;

const NavButton = styled.li`
  margin-right: 15px;
  font-size: 25px;
  color: #222222;
  text-decoration: none;
  cursor: pointer;
  padding: 5px;

  &:hover {
    font-weight: bold;
    background-color: whitesmoke;
    color: #222222;
  }
`;
const NavItem = styled.li`
  margin-right: 15px;
  font-size: 25px;
  color: #222222;
  text-decoration: none;
  cursor: pointer;
  padding: 5px;

  &:hover {
    font-weight: bold;
  }
`;
