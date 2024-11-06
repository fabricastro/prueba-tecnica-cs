import React, { useState } from 'react';
import { questions } from '../data/questions';
import Header from '../Components/Header';
import Button from '../Components/Button';
import OptionButton from '../Components/OptionButton';
import styled, { css } from 'styled-components';
import { IoArrowBack } from "react-icons/io5";
import Input from '../Components/Input';
import FinalScreen from './FinalScreen';

const MainContainer = styled.div`
  padding: 0 35px;
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
    `}

  ${({ layout }) =>
        layout === 'column' &&
        css`
      flex-direction: column;
      width: 100%;
      margin-top: 0;
      gap: 5px;
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
    `}
`;

export const Question: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isComplete, setIsComplete] = useState(false);

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
        } else {
            setIsComplete(true);
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOption(null);
        }
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const renderTextWithBold = (text: string) => {
        const parts = text.split(/(\*\*[^*]+\*\*)/); 
        return parts.map((part, index) =>
            part.startsWith('**') && part.endsWith('**') ? (
                <strong key={index}>{part.slice(2, -2)}</strong>
            ) : (
                part
            )
        );
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <>
            {isComplete ? (
                <FinalScreen />
            ) : (
                <>
                    <Header currentStep={currentQuestionIndex + 1} totalSteps={questions.length} />
                    <MainContainer>
                        <QuestionContainer>
                            <>
                                {currentQuestion.text && <p>{renderTextWithBold(currentQuestion.text)}</p>}
                                <p>{currentQuestion.question}</p>
                                {currentQuestion.input && <Input placeholder={currentQuestion.input} />}
                                <OptionsContainer layout={currentQuestion.layout}>
                                    {currentQuestion.options?.map((option) => (
                                        <OptionButton
                                            key={option}
                                            selected={selectedOption === option}
                                            onClick={() => handleOptionSelect(option)}
                                            layout={currentQuestion.layout}
                                        >
                                            {option}
                                        </OptionButton>
                                    ))}
                                </OptionsContainer>
                            </>
                        </QuestionContainer>
                        <ButtonsContainer>
                            {currentQuestionIndex > 0 && (
                                <Button onClick={handleBack} variant="tertiary">
                                    <IoArrowBack className="icon" />
                                </Button>
                            )}
                            <Button onClick={handleNext}>Siguiente</Button>
                        </ButtonsContainer>
                    </MainContainer>
                </>
            )}
        </>
    );
};
