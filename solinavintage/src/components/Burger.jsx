import { useState } from 'react';
import styled from 'styled-components';

const StyledBurger = styled.div`
width; 2rem;
height: 2rem;
position: fixed;
top: 15px;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;

`;
const Patty = styled.div`
width: 2rem;
height: 0.25rem;
background-color: ${({open}) => open ? '#ccc' : '#333'};

&:nth-child(1) {
    
}
`;

const Burger = () => {
    const [open, setOpen] = useState(false)
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <Patty />
        <Patty />
        <Patty />
    </StyledBurger>
  )
}

export default Burger