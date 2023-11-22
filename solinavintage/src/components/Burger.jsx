import styled from 'styled-components';

const StyledBurger = styled.div`

display: none;

@media (max-width: 767px){
  width; 2rem;
  height: 2rem;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 1;
  cursor: pointer;
}
`;
const Patty = styled.div`
width: 2rem;
height: 0.12rem;
background-color: #333;
`;

const Burger = () => {
  return (
    <StyledBurger>
        <Patty />
        <Patty />
        <Patty />
    </StyledBurger>
  )
}

export default Burger