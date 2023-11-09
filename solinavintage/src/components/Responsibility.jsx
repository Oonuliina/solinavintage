import styled from "styled-components";
import recycled from "../assets/Responsibility/Recycling_symbol.svg.png";
import hesy from "../assets/Responsibility/hesy_logo.webp";
import qualityCheck from "../assets/Responsibility/quality-check.png";

const Container = styled.div`
  width: 100%;
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
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justfy-content: center;
`;
const Item = styled.div`
  flex: 1;
`;
const Circle = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  background-color: white;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 200px;
`;
const Desc = styled.p`
  font-size: 24px;
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
