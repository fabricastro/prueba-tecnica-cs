import React from 'react';
import Button from '../Components/Button';
import { IoArrowBack } from "react-icons/io5";
import styled from 'styled-components';

interface QuestionNavigationProps {
    isFinalStep: boolean;
    isFirstStep: boolean;
    onNext: () => void;
    onBack: () => void;
    isNextDisabled: boolean;
}

const NavigationContainer = styled.div<{ applyMargin?: boolean }>`
  display: flex;
  gap: 7px;
  padding-top: 34px;
  
  /* Aplica el margen solo en pantallas de escritorio */
  ${({ applyMargin }) => applyMargin && `
    @media (min-width: 1200px) {
      margin-left: -58px;
    }
  `}
`;

const QuestionNavigation: React.FC<QuestionNavigationProps> = ({ isFinalStep, isFirstStep, onNext, onBack, isNextDisabled }) => (
    <NavigationContainer applyMargin={!isFirstStep && !isFinalStep}>
        {!isFirstStep && (
            <Button onClick={onBack} variant="tertiary">
                <IoArrowBack className="icon" />
            </Button>
        )}
        {!isFinalStep ? (
            <Button onClick={onNext} disabled={isNextDisabled}>
                Siguiente
            </Button>
        ) : (
            <Button onClick={onNext}>
                Finalizar
            </Button>
        )}
    </NavigationContainer>
);

export default QuestionNavigation;
