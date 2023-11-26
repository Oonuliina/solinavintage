import styled from "styled-components";
import { products } from "../data";
import React, { useState } from "react";
import { X } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";

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
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)}>
              <X size={32} weight="light" />
            </CloseModalButton>
          </SearchContent>
        </SearchContainer>
        {query.length !== 0 && (
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
        )}
      </Wrapper>
    </SearchModal>
  );
};

export default Search;

const SearchModal = styled.div`
  position: fixed;
  width: 100%;
  height: 200px;
  z-index: 6;
  background: white;
  left: 0;
  top: 40px;
  border: 0.5px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${mobile({
    height: "50px",
    paddingTop: "5px",
    paddingBottom: "5px",
    top: "35px",
  })}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ResultContainer = styled.div`
  position: absolute;
  top: 60%;
  width: 370px;
  padding: 5px;
  background-color: whitesmoke;
  border: 0.5px solid gray;

  ${mobile({ width: "340px", top: "88%" })}
`;
const CloseModalButton = styled.button`
  height: 35px;
  border: none;
  width: 30px;
  background: none;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  padding: 5px;
  font-size: 13px;
  height: 35px;
  width: 370px;
  display: flex;
  align-items; center;
  justify-content: center;

  ${mobile({ width: "340px" })}
`;
const SearchContent = styled.div`
  display: flex;
  width: 370px;

  ${mobile({ width: "340px" })}
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
  padding: 5px;
  width: 350px;
  background-color: whitesmoke;
  list-style: none;
  z-index: 3;
  margin: 0;

  ${mobile({ width: "320px" })}
`;
const ListItem = styled.li`
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
