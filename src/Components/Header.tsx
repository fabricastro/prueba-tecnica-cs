import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    currentStep: number;
    totalSteps: number;
}

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 49px;
  padding-top: 43px;
  @media (min-width: 1200px) {
    padding: 0;
    flex-basis: 50%;
    background: linear-gradient(283.73deg, #231331 -29.4%, #00CCBC 50.02%);
    border-radius: 200px 0 0 200px;
    position: relative;
    height: 100vh;
  }
`;

const BackgroundImage = styled.img`
  padding-left: 10px;
  width: 100%;
  height: 100%;

  @media (min-width: 1200px) {
    content: url('/header-man.png');
    padding: 0;
    position: absolute;
    bottom: 0; 
    left: 50%;
    transform: translateX(-50%); 
    width: auto;
    height: 80%;
    max-height: 100%; 
  }
`;

const StepIndicator = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 60px;
  right: 16px;
  font-family: 'SF Pro Display', sans-serif;
  color: #231331;

  @media (min-width: 1250px) {
    top: 150px;
    right: 130px;
  }
`;

const CurrentStep = styled.span`
  font-size: 18px; 
  font-weight: bold;
  margin-right: 6px; 

  @media (min-width: 1250px) {
    font-size: 24px;
  }
`;

const TotalSteps = styled.span`
  font-size: 10px; 
  font-weight: normal;
  margin-left: 6px;
  padding-top: 6px;

  @media (min-width: 1250px) {
    font-size: 14px;
  }
`;

const LogoCS = styled.img`
  position: absolute;
  left: 49px;
  max-width: 100px;
  @media (min-width: 1200px) {
  display: none;
  }
`;

const Header: React.FC<HeaderProps> = ({ currentStep, totalSteps }) => {
    return (
        <HeaderContainer>
            <BackgroundImage src="/header.svg" alt="Header Background" />
            <LogoCS src="/logo.png" alt="Logo Customer Scoops" />
            <StepIndicator>
                <CurrentStep>{String(currentStep).padStart(2, '0')}</CurrentStep>
                <div className='bar'></div>
                <TotalSteps>{String(totalSteps).padStart(2, '0')}</TotalSteps>
            </StepIndicator>
        </HeaderContainer>
    );
};

export default Header;
