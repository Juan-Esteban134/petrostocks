import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`

  margin: 0 auto;
  padding: 40px;
  text-align: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 90%;
  height: 600px;
`;

export const Mainpage = () => {
  return (
    <WelcomeContainer>
      <Title>Bienvenido a la Administración de Hyper Stonks</Title>
      <Description>
        Nuestra página está dedicada a ayudarte en la gestión eficiente del stock de tu bodega. 
        Podrás realizar un seguimiento detallado de los productos, controlar las existencias, 
        realizar ajustes de inventario y mucho más.
      </Description>
      <Image src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/04/stonks-2286073.jpg?tf=3840x" alt="Bodega" />
    </WelcomeContainer>
  );
};

export default Mainpage;
