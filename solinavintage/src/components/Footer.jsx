import React from "react";
import {
  FacebookLogo,
  Envelope,
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

const Container = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
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
`;
const Left = styled.div`
  flex: 1;
  margin-top: 20px;
`;

const LinksBox = styled.div`
  padding-left: 50%;
  width: 50%;
`;
const LinksTitle = styled.h1`
  margin-bottom: 17px;
  text-align: left;
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
`;

const ContactBox = styled.div`
  padding-left: 20%;
  width: 80%;
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
`;
const CopyrightContainer = styled.div``;
const Copyright = styled.p`
  font-size: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <FooterSeparator />
      <FooterInfo>
        <Left>
          <LinksBox>
            <LinksTitle>Linkkejä</LinksTitle>
            <LinksList>
              <LinkItem>Tietoa meistä</LinkItem>
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
            <Envelope size={32} weight="light" />
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
