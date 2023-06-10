import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
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
  max-width: 100%;
  height: auto;
`;

export const Mainpage = () => {
  return (
    <WelcomeContainer>
      <Title>Bienvenido a la Administración de PetroStocks</Title>
      <Description>
        Nuestra página está dedicada a ayudarte en la gestión eficiente del stock de tu bodega. 
        Podrás realizar un seguimiento detallado de los productos, controlar las existencias, 
        realizar ajustes de inventario y mucho más.
      </Description>
      <Image src="https://www.semana.com/resizer/SBMAlVU21WI27QWUqtOAA1R3fk8=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/SIQEWJKUTVHZNK6DW3TFLCKNXU.jpg" alt="Bodega" />
    </WelcomeContainer>
  );
};

export default Mainpage;
