import React from 'react'
import Header from '../components/Header'
import Slider from "../components/Slider";
import Footer from '../components/Footer'
import RandomProducts from '../components/RandomProducts'
import Responsibility from '../components/Responsibility'
import styled from 'styled-components'
import Announcement from '../components/Announcement';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const Title = styled.h1`
  text-align: center;
`;

function Etusivu({addToCart, cart}) {
  return (
    <Container>
        <Announcement />
        <Header cart={cart} />
        <Slider />
        <Title>Uutuuksia</Title>
        <RandomProducts addToCart={addToCart}/>
        <Responsibility />
        <Footer />
    </Container>
  )
}

export default Etusivu