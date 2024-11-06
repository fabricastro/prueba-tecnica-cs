import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import Header from '../Components/Header';
import Button from '../Components/Button';
import OptionButton from '../Components/OptionButton';
import styled, { css } from 'styled-components';
import { IoArrowBack } from "react-icons/io5";
import Input from '../Components/Input';
import FinalScreen from './FinalScreen';
import ProgressBar from '../Components/ProgressBar';
import { useSurvey } from '../Context/SurveyContext';

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

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 35px;

  @media (min-width: 1350px) {
    padding-left: 160px;
    padding-right: 100px;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ButtonsContainer = styled.div`
  padding-top: 1rem;
  align-items: center;
  display: flex;
  width: 100%;
  gap: 7px;
`;

const LogoDesktop = styled.img`
  display: none;
  @media (min-width: 1350px) {
   display: block;
   max-width: 120px;
  }
`;

const OptionsContainer = styled.div<{ layout: 'grid' | 'grid2' | 'flex' | 'column' }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  gap: 5px;

  ${({ layout }) =>
    layout === 'grid' &&
    css`
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: 100%;

      @media (min-width: 1350px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    `}
  ${({ layout }) =>
    layout === 'column' &&
    css`
      flex-direction: column;
      width: 100%;
      margin-top: 0;
      gap: 5px;

      @media (min-width: 1350px) {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    `}
  ${({ layout }) =>
    layout === 'grid2' &&
    css`
      display: grid; 
      grid-template-columns: repeat(2, 1fr);
      width: 100%;

      & > *:last-child {
        grid-column: span 2;
      }
     
      @media (min-width: 1350px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        & > *:last-child {
          grid-column: span 1;
        }
      }
    `}
`;

export const Question: React.FC = () => {
  const { currentStep, setCurrentStep, responses, setResponse, userName, setUserName } = useSurvey();
  const [selectedOption, setSelectedOption] = useState<string | null>(responses[currentStep] || null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (selectedOption !== null) {
      setResponse(currentStep, selectedOption);
    }
  }, [selectedOption, currentStep]);
  
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(responses[currentStep + 1] || null);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(responses[currentStep - 1] || null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const renderTextWithBold = (text: string) => {
    const processedText = text.replace("**Juan**", `**${userName || "Juan"}**`);
    const parts = processedText.split(/(\*\*[^*]+\*\*)/);

    return parts.map((part, index) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );
  };

  const currentQuestion = questions[currentStep];
  const isNameStep = currentStep === 0;

  return (
    <>
      <ProgressBar currentStep={currentStep + 1} totalSteps={questions.length} />
      {isComplete ? (
        <FinalScreen />
      ) : (
        <SplitContainer>
          <Header currentStep={currentStep + 1} totalSteps={questions.length} />
          <TextContainer>
            <LogoDesktop src="/logo.png" alt="Logo Customer Scoops" />
            <QuestionContainer>
              <>
                {currentQuestion.text && <p>{renderTextWithBold(currentQuestion.text)}</p>}
                <p>{currentQuestion.question}</p>
                {isNameStep ? (
                  <Input
                    placeholder={currentQuestion.input}
                    value={userName}
                    onChange={handleInputChange}
                  />
                ) : (
                  <OptionsContainer layout={currentQuestion.layout}>
                    {currentQuestion.options?.map((option) => (
                      <OptionButton
                        key={option}
                        selected={selectedOption === option}
                        onClick={() => setSelectedOption(option)}
                        layout={currentQuestion.layout}
                      >
                        {option}
                      </OptionButton>
                    ))}
                  </OptionsContainer>
                )}
              </>
            </QuestionContainer>
            <ButtonsContainer>
              {currentStep > 0 && (
                <Button onClick={handleBack} variant="tertiary">
                  <IoArrowBack className="icon" />
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={(isNameStep && !userName) || (!isNameStep && !selectedOption)}
              >
                Siguiente
              </Button>
            </ButtonsContainer>
          </TextContainer>
        </SplitContainer>
      )}
    </>
  );
};
