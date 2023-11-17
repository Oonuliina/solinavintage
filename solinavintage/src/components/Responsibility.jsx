import styled from "styled-components";
import recycled from "../assets/Responsibility/Recycling_symbol.svg.png";
import hesy from "../assets/Responsibility/hesy_logo.webp";
import qualityCheck from "../assets/Responsibility/quality-check.png";

const Container = styled.div`
  width: 100%;

  @media only screen and (max-width: 380px) {
    display: none;
  }
`;
const Separator = styled.hr`
  border: 1;
  margin-top: 0;
  margin-bottom: 0;
  width: 95%;
`;
const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
  
  @media only screen and (max-width: 380px) {
    font-size: 20px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justfy-content: center;
  margin: 0px 300px 0px 300px;

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

  @media only screen and (max-width: 380px) {
    max-height: 150px;
    max-width: 150px;
  }
`;
const Image = styled.img`
  height: 200px;

  @media only screen and (max-width: 380px) {
    height: 100px;
    
  }
`;
const Desc = styled.p`
  font-size: 20px;
  text-align: center;

  @media only screen and (max-width: 380px) {
    font-size: 10px;
  }
`;

const Responsibility = () => {
  return (
    <Container>
      <Separator />
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
