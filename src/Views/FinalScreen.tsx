// src/Components/FinalScreen.tsx
import React from 'react';
import styled from 'styled-components';
import Button from '../Components/Button';
import Header from '../Components/Header';

const MainContainer = styled.div`
  padding: 0 35px;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;
`;

const Message = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #231331;
  margin: 20px 0;
`;

const SubMessage = styled.p`
  font-size: 20px;
  color: #231331;
  line-height: 0;
`;

const FinalScreen: React.FC = () => {
    return (
        <>
        <Header currentStep={6} totalSteps={6}/>
        <MainContainer>
            <Message>Muchas Gracias</Message>
            <SubMessage className='sub-message'>por querer ser parte  </SubMessage>
            <SubMessage>de la familia Scoopers.</SubMessage>
            <p><em>Nos vemos pronto!</em></p>
            <Button onClick={() => alert("Formulario completado")} className='final'>Finalizar</Button>
        </MainContainer>
        </>
    );
};

export default FinalScreen;
