import React from 'react'
import Header from '../components/Header'
import Slider from "../components/Slider";
import Footer from '../components/Footer'
import Products from '../components/Products'
import Responsibility from '../components/Responsibility'
import styled from 'styled-components'
import Announcement from '../components/Announcement';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


function Etusivu() {
  return (
    <Container>
        <Announcement />
        <Header />
        <Slider />
        <Products />
        <Responsibility />
        <Footer />
    </Container>
  )
}

export default Etusivu