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
import { mobile, tablet } from "../responsive";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {/* Footer top wrapper*/}
      <FooterInfo>
        {/* Left side of footer top*/}
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
        {/* Middle of footer top*/}
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
        {/* Right side of footer top */}
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
      {/* Footer bottom wrapper*/}
      <FooterBot>
        {/* Social icons */}
        <SocialIconContainer>
          <SocialIcon>
            <FacebookLogo size={38} weight="light" />
          </SocialIcon>
          <SocialIcon>
            <PinterestLogo size={38} weight="light" />
          </SocialIcon>
          <SocialIcon>
            <InstagramLogo size={38} weight="light" />
          </SocialIcon>
        </SocialIconContainer>
        {/* Copyright */}
        <CopyrightContainer>
          <Copyright>© 2023 Solina Vintage Oy</Copyright>
        </CopyrightContainer>
      </FooterBot>
    </Container>
  );
};

export default Footer;

/* Whole footer container*/
const Container = styled.div`
  margin-top: auto;
  bottom: 0;
  width: 100%;
  border-top: 0.5px solid lightgray;
`;
/* Footer top wrapper*/
const FooterInfo = styled.div`
  display: flex;
  padding-bottom: 30px;

  ${tablet({ flexDirection: "column", marginLeft: "30px" })}
`;
/* Left side of footer top*/
const Left = styled.div`
  flex: 1;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet({ alignItems: "left", justifyContent: "left" })}
`;

const LinksBox = styled.div`
  ${mobile({
    padding: "0% 5% 0% 5%",
    width: "70%",
    display: "flex",
    flexDirection: "column",
  })}
`;
const LinksTitle = styled.h1`
  margin-bottom: 17px;
  align-text: left;
  font-size: 20px;
`;
const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const LinkItem = styled.li`
  font-size: 18px;
  padding-bottom: 6px;
  list-style: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;
/* Middle of footer top*/
const Center = styled.div`
  flex: 1;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet({ alignItems: "left", justifyContent: "left" })}
  ${mobile({ marginTop: "10px" })}
`;

const ContactBox = styled.div`
  ${mobile({
    padding: "0% 5% 0% 5%",
    width: "70%",
    display: "flex",
    flexDirection: "column",
  })}
`;
const ContactTitle = styled.h1`
  text-align: left;
  font-size: 20px;
  margin-bottom: 17px;
`;
const ContactItem = styled.p`
  display: flex;
  text-align: left;
  font-size: 18px;
  align-items: center;
  justify-content: left;
  margin: 0;
  padding-bottom: 6px;

  ${mobile({ margin: "2px" })}
`;
const ContactIcon = styled.span`
  padding-right: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
/* Right side of footer top*/
const Right = styled.div`
  flex: 1;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet({ alignItems: "left", justifyContent: "left" })}
  ${mobile({ marginTop: "10px" })}
`;

const PaymentContainer = styled.div`
  ${mobile({
    padding: "0% 5% 0% 5%",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignText: "left",
  })}
`;
const PaymentTitle = styled.h1`
  text-align: left;
  font-size: 20px;
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
/* Footer bottom wrapper */
const FooterBot = styled.div`
  display: flex;
  flex-direction: column;
`;
/* Social icons */
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
/* Copyright */
const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Copyright = styled.p`
  font-size: 14px;
`;
