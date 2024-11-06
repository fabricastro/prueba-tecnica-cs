import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const ProgressFill = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: #231331;
  transition: width 0.3s ease-in-out;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <ProgressBarContainer>
            <ProgressFill progress={progress} />
        </ProgressBarContainer>
    );
};

export default ProgressBar;
