import styled from "styled-components";
import { products } from "../data";
import React, { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import {useNavigate } from "react-router-dom";

const Search = ({ setShowModal }) => {
  const [query, setQuery] = useState("");
  let navigate = useNavigate();

  const routeChange = (i) => {
    let path = "/tuote/" + i.id;
    navigate(path);
  };

  return (
    <SearchModal>
      <Wrapper>
        <SearchContainer>
          <SearchContent>
            <Input
              type="text"
              name="search"
              placeholder="Haku"
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchIconButton>
              <MagnifyingGlass size={24} weight="light" />
            </SearchIconButton>
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)}>
              X
            </CloseModalButton>
          </SearchContent>
        </SearchContainer>
        <ResultContainer>
          <List name="list">
            {products
              .filter((item) => item.title.toLowerCase().includes(query))
              .slice(0, 4)
              .map((item) => (
                <ListItem
                  key={item.id}
                  name="listItem"
                  onClick={() => routeChange(item)}
                >
                  <SearchImage src={item.img} />
                  <SearchItemTitle>{item.title}</SearchItemTitle>
                </ListItem>
              ))}
          </List>
        </ResultContainer>
      </Wrapper>
    </SearchModal>
  );
};

export default Search;

const SearchModal = styled.div`
  position: fixed;
  width: 100%;
  height: 200px;
  z-index: 3;
  background: white;
  left: 0;
  top: 30;
  border: 0.5px solid;
  padding: 10px;
  box-shadow: 5px 2px #888888;

  @media only screen and (max-width: 380px) {
    height: 40px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ResultContainer = styled.div`
  display: block;
  width: 370px;
  padding: 5px;
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
  border: 0.5px solid gray;
  display: flex;
  padding: 5px;
  font-size: 13px;
  height: 35px;
  width: 370px;

  @media only screen and (max-width: 380px) {
    height: 20px;
    margin-left: 0px;
  }
`;
const SearchIconButton = styled.button`
  position: relative;
  display: flex;
  cursor: pointer;
  border: none;
  background: none;
`;
const SearchContent = styled.div`
  display: flex;
  width: 370px;
`;
const Input = styled.input`
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
const List = styled.ul`
  padding: 10px;
  width: 350px;
  background-color: whitesmoke;
  list-style: none;
  z-index: 2;
`;
const ListItem = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
  padding: 7px;
  font-size: 25px;
  font-weight: 300;
`;
const SearchImage = styled.img`
  height: 80px;
  width: 70px;
  padding-right: 10px;
`;
const SearchItemTitle = styled.span`
  font-size: 15px;
  text-align: left;
  padding-right: 20px;
`;
