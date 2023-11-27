import styled from "styled-components";
import recycled from "../assets/Responsibility/Recycling_symbol.svg.png";
import hesy from "../assets/Responsibility/hesy_logo.webp";
import qualityCheck from "../assets/Responsibility/quality-check.png";
import { large, tablet } from "../responsive";


const Container = styled.div`
  width: 100vw;
  padding-bottom: 20px;
  border-top: 0.5px solid lightgray;

`;
const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
  

  ${large({ fontSize: "30px"})}
  @media only screen and (max-width: 380px) {
    font-size: 20px;
  }
`;
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justfy-content: center;

  ${tablet({ flexDirection: "column"})}
  @media only screen and (max-width: 380px) {
    margin: 0px 5px 0px 5px;
    flex-direction: column;
  }
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justfy-content: center;
  height: 435px;
  width: 276px;

  ${large({ height: "300px"})}
  @media only screen and (max-width: 380px) {
    height: 217px;
  }
`;
const Circle = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  top: 0;
  left: 0;
  background-color: white;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  ${large({ height: "200px", width: "200px" })}
  @media only screen and (max-width: 380px) {
    max-height: 150px;
    max-width: 150px;
  }
`;
const Image = styled.img`
  height: 200px;


  ${large({ height: "125px"})}
  @media only screen and (max-width: 380px) {
    height: 100px;
    
  }
`;
const Desc = styled.span`
  font-size: 24px;
  padding: 20px;
  text-align: center;

  ${large({ fontSize: "1rem", paddingLeft: "10px", paddingRight: "10px"})}
  @media only screen and (max-width: 380px) {
    font-size: 10px;
  }
`;

const Responsibility = () => {
  return (
    <Container>
      <Title>Vastuullisuus</Title>
      <Wrapper>
        <Item>
          <Circle>
            <Image src={recycled} />
          </Circle>
          <Desc>Osta meiltä ja tue kiertotaloutta!</Desc>
        </Item>
        <Item>
          <Circle>
            <Image src={hesy} />
          </Circle>
          <Desc>
            Jokaisesta ostamastasi tuotteesta lahjoitamme 10% ostosummasta HESY
            ry:lle.
          </Desc>
        </Item>
        <Item>
          <Circle>
            <Image src={qualityCheck} />
          </Circle>
          <Desc>Kaikille myytäville tuotteille on tehty laatutarkastus. </Desc>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Responsibility;
