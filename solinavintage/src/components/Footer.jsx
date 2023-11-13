import React from "react";
import {
  FacebookLogo,
  PinterestLogo,
  InstagramLogo,
  MapPin,
  Phone,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import paytrail from "../assets/paytrailLogo.png";
import siirto from "../assets/SiirtoLogo.png";
import mobilepay from "../assets/mobilepayLogo.png";
import pivo from "../assets/pivoLogo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  bottom: 0;
  left: 0;
  width: 100vw;
  margin-top: 40px;
`;
const FooterSeparator = styled.hr`
  border: 1;
  margin-top: 0;
  margin-bottom: 0;
  width: 95%;
`;
const FooterInfo = styled.div`
  display: flex;
  padding-bottom: 30px;
  margin: 0px 300px 0px 300px;

  @media only screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
`;
const Left = styled.div`
  flex: 1;
  margin-top: 20px;
`;

const LinksBox = styled.div`
  padding-left: 50%;
  width: 50%;

  @media only screen and (max-width: 380px) {
    padding: 0% 5% 0% 5%;
    width: 90%;
    display: flex;
    flex-direction: column;
    aligt-text: left;
  }
`;
const LinksTitle = styled.h1`
  margin-bottom: 17px;
  align-text: left;
  font-size: 16px;
`;
const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const LinkItem = styled.li`
  font-size: 14px;
  padding-bottom: 6px;
  list-style: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

const Center = styled.div`
  flex: 1;
  margin-top: 20px;

  @media only screen and (max-width: 380px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContactBox = styled.div`
  padding-left: 20%;
  width: 80%;

  @media only screen and (max-width: 380px) {
    padding: 0% 5% 0% 5%;
    width: 90%;
  }
`;
const ContactTitle = styled.h1`
  text-align: left;
  font-size: 16px;
`;
const ContactItem = styled.p`
  display: flex;
  text-align: left;
  font-size: 14px;
  align-items: center;
  justify-content: left;
`;
const ContactIcon = styled.span`
  padding-right: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  margin-top: 20px;

  @media only screen and (max-width: 380px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PaymentContainer = styled.div``;
const PaymentTitle = styled.h1`
  text-align: left;
  font-size: 16px;
`;
const PaymentImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  filter: grayscale();
`;

const BigImageContainer = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: center;
`;
const BigImage = styled.img`
  height: 100px;
  width: auto;
  padding-left: 0;
`;
const SmallImageContainer = styled.div`
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SmallImage = styled.img`
  height: 32px;
  padding-bottom: 1px;
`;

const FooterBot = styled.div`
  display: flex;
  flex-direction: column;
`;
const SocialIconContainer = styled.div`
  display: flex;
  margin: auto;
`;
const SocialIcon = styled.div`
  display: flex;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Copyright = styled.p`
  font-size: 10px;
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <FooterSeparator />
      <FooterInfo>
        <Left>
          <LinksBox>
            <LinksTitle>Linkkejä</LinksTitle>
            <LinksList>
              <LinkItem onClick={() => navigate("/meista")}>
                Tietoa meistä
              </LinkItem>
              <LinkItem>Toimitusehdot</LinkItem>
              <LinkItem>Tietosuojakäytännöt</LinkItem>
              <LinkItem>Laita meille viestiä</LinkItem>
            </LinksList>
          </LinksBox>
        </Left>
        <Center>
          <ContactBox>
            <ContactTitle>Yhteystiedot</ContactTitle>
            <ContactItem>
              <ContactIcon>
                <EnvelopeSimple size={24} weight="light" />
              </ContactIcon>
              info@solinavintage.fi
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <Phone size={24} weight="light" />
              </ContactIcon>{" "}
              050 012 3456
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <MapPin size={24} weight="light" />
              </ContactIcon>{" "}
              Vintagekatu 3, 00100 Helsinki
            </ContactItem>
          </ContactBox>
        </Center>
        <Right>
          <PaymentContainer>
            <PaymentTitle>Maksutavat</PaymentTitle>
            <PaymentImageContainer>
              <BigImageContainer>
                <BigImage src={paytrail} />
              </BigImageContainer>
              <SmallImageContainer>
                <SmallImage src={mobilepay} />
                <SmallImage src={siirto} />
                <SmallImage src={pivo} />
              </SmallImageContainer>
            </PaymentImageContainer>
          </PaymentContainer>
        </Right>
      </FooterInfo>
      <FooterBot>
        <SocialIconContainer>
          <SocialIcon>
            <FacebookLogo size={32} weight="light" />
          </SocialIcon>
          <SocialIcon>
            <PinterestLogo size={32} weight="light" />
          </SocialIcon>
          <SocialIcon>
            <InstagramLogo size={32} weight="light" />
          </SocialIcon>
        </SocialIconContainer>
        <CopyrightContainer>
          <Copyright>© 2023 Solina Vintage Oy</Copyright>
        </CopyrightContainer>
      </FooterBot>
    </Container>
  );
};

export default Footer;
