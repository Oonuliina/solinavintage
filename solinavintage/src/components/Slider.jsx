import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { sliderItems } from "../sliderData";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 380px) {
    height: 200px;
  }
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.$direction === "left" && "10px"};
  right: ${(props) => props.$direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  @media only screen and (max-width: 380px) {
    width: 35px;
    height: 35px;
    left: ${(props) => props.$direction === "left" && "5px"};
    right: ${(props) => props.$direction === "right" && "5px"};
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.$slideindex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.$bg};

  @media only screen and (max-width: 380px) {
    height: 200px;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  padding: 50px 0px 50px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
  margin-left: 30px;

  @media only screen and (max-width: 380px) {
    height: 70%;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;

  @media only screen and (max-width: 380px) {
    padding: 10px;
    margin-right: 30px;
  }
`;
const Title = styled.h1`
  margin: 10x 0px 0px 0px;
  font-size: 50px;
  text-align: left;

  @media only screen and (max-width: 380px) {
    font-size: 15px;
  }
`;
const Desc = styled.p`
  margin: 10px 0px 10px 0px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  letter-spacing: 3px;

  @media only screen and (max-width: 380px) {
    font-size: 10px;
    margin: 5px 0px 5px 0px;
    letter-spacing: 1px;
  }
`;
const Button = styled.button`
  margin: 30px 0px;
  padding: 15px;
  border: none;
  border-radius: 30px;
  width: 200px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  color: gray;
  letter-spacing: 2px;
  background-color: whitesmoke;

  @media only screen and (max-width: 380px) {
    font-size: 10px;
    margin: 10px 0px;
    width: 100px;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(-2);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > -2 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : -2);
    }
  };
  return (
    <Container>
      <Arrow $direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosRoundedIcon />
      </Arrow>
      <Wrapper $slideindex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide $bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to={`/tuotteet/${item.category}`}>
                <Button>OSTA NYT</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow $direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosRoundedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
