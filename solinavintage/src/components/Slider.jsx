import React from "react";
import styled from "styled-components";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import clothesOnRack from "../assets/clother_on_rack.jpg";

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosRoundedIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src={clothesOnRack} />
            <InfoContainer>
              <Title>Tietoa Meistä</Title>
            </InfoContainer>
          </ImgContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosRoundedIcon />
      </Arrow>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  margin-top: 30px;
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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  width: 100vm;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  position: relative;
  width: 100vm;
  height: 100vh;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  display: flex;
  background-color: whitesmoke;
  width: 450px;
  height: 55px;
  opacity: 0.5;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 30px;
  position: absolute;
`;
export default Slider;
