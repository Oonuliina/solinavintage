import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from "styled-components";
import meista from "../assets/meista_page_img.jpg"

const Meista = () => {
  return (
    <div>
      <Header />
        <ImgContainer>
            <Image src={meista} />
        </ImgContainer>
        <TextContainer>
          <HeaderAboutUs>Uusi elämä käytetylle tuotteelle</HeaderAboutUs>
          <TextAboutUs>
            Solina Vintage & Second Hand on vuonna 2023 perustettu käytettyjen vintage ja 
            muiden vaatteiden ja keräilyesineiden verkkokauppa. Meidän tavoite on edistää 
            tuotteiden uudellen käytettävyyttä tyylistä tinkimättä. Kierrätettyjä tuotteita ostamalla 
            autat edistämään kiertotaloutta ja säästämään luontoa, sekä maapallomme arvokkaita 
            resursseja. Jokainen myytävä tuotteemme on laadullisesti tarkistettu ja ehjä.
          </TextAboutUs>
          <TextAboutUs>
            Vintage muoti on ajatonta ja on hyvin sovellettavissa nykypäivän trendeihin. 
            Kulutustuotteita voidaan kutsua vintageksi, kun sille en kertynyt ikää muutaman 
            vuosikymmenen verran.
          </TextAboutUs>
          <TextAboutUs>
            Tuemme toiminnallamme pääkaupunkiseudulla toimivaa Helsingin 
            eläinsuojeluyhdistys HESY:ä lahjoittamalla jokaisen ostamasi tuotteen myyntihinnasta 
            jopa 10% heidän toiminnan edistämiseen. Pelastetaan maapalloa yksi käytetty tuote kerrallaan 
            ja edistetään eläinten hyvinvointia!
          </TextAboutUs>
        </TextContainer>
      <Footer />
    </div>
  )
}

const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const TextContainer = styled.div`
  max-width: 1005px;
  margin: auto;
  text-align: center;
  margin-bottom: 120px;
`;

const HeaderAboutUs = styled.h1`
  font-size: 48px;
`;

const TextAboutUs = styled.p`
  font-size: 24px;
`;

export default Meista