import React from 'react'
import Header from '../components/Header'
import Slider from "../components/Slider";
import Footer from '../components/Footer'
import RandomProducts from '../components/RandomProducts'
import styled from 'styled-components'
import Announcement from '../components/Announcement';

function Etusivu({addToCart, cart}) {
  return (
    <Container>
      {/* Announcement for free delivery if ordering with over 100€ */}
        <Announcement />
        <Header cart={cart} />
        {/* Slider for advertisement */}
        <Slider />
        {/* Showing the newest products in the catalog */}
        <Title>Uutuuksia</Title>
        <RandomProducts addToCart={addToCart}/>
        <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const Title = styled.h1`
  text-align: center;
`;

export default Etusivu