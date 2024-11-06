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
`;

const BackgroundImage = styled.img`
  padding-left: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StepIndicator = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 58px;
  right: 16px;
  font-family: 'SF Pro Display', sans-serif;
  color: #231331;
`;

const CurrentStep = styled.span`
  font-size: 18px; 
  font-weight: bold;
  margin-right: 6px; 
`;

const TotalSteps = styled.span`
  font-size: 10px; 
  font-weight: normal;
  margin-left: 6px;
  padding-top: 6px;
`;

const LogoCS = styled.img`
  position: absolute;
  left: 49px;
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
