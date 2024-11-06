// src/Components/FinalScreen.tsx
import React from 'react';
import styled from 'styled-components';
import Button from '../Components/Button';
import Header from '../Components/Header';

const SplitContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1350px) {
    flex-direction: row-reverse;
    margin: 0 auto;
    padding: 0;
    justify-content: space-between;
    height: 100%;
  }
`;
const MainContainer = styled.div`
  padding: 0 35px;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;
  @media (min-width: 1350px) {
    justify-content: center;
    padding-left: 160px;
  }
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
      <SplitContainer>
        <Header currentStep={6} totalSteps={6} />
        <MainContainer>
          <Message>Muchas Gracias</Message>
          <SubMessage className='sub-message'>por querer ser parte  </SubMessage>
          <SubMessage>de la familia Scoopers.</SubMessage>
          <p><em>Nos vemos pronto!</em></p>
          <Button onClick={() => (window.location.href = 'https://customerscoops.com/')} className='final'>
            Finalizar
          </Button>
        </MainContainer>
      </SplitContainer>
    </>
  );
};

export default FinalScreen;
