import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import Header from '../Components/Header';
import ProgressBar from '../Components/ProgressBar';
import Input from '../Components/Input';
import { useSurvey } from '../Context/SurveyContext';
import SplitContainer from '../Components/SplitContainer';
import TextContent from '../Components/TextContent';
import OptionList from '../Components/OptionList';
import QuestionNavigation from '../Components/QuestionNavigation';
import TextContainer from '../Components/TextContainer';
import LogoDesktop from '../Components/LogoDesktop';
import FinalContent from '../Components/FinalContent';
import QuestionContainer from '../Components/QuestionContainer';

export const Question: React.FC = () => {
  const { setBackgroundColor, currentStep, setCurrentStep, responses, setResponse, userName, setUserName } = useSurvey();
  const [selectedOption, setSelectedOption] = useState<string | null>(responses[currentStep] || null);
  const isFinalStep = currentStep === questions.length - 1;
  const currentQuestion = questions[currentStep];
  const isInputQuestion = Boolean(currentQuestion.input);
  const isOptionQuestion = Boolean(currentQuestion.options);

  useEffect(() => {
    if (isFinalStep) {
      setBackgroundColor('#00ccbc');
    } else {
      setBackgroundColor('#FFFFFF');
    }
  }, [isFinalStep, setBackgroundColor]);

  useEffect(() => {
    if (selectedOption) {
      setResponse(currentStep, selectedOption);
    }
  }, [selectedOption, currentStep, setResponse]);

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(responses[currentStep + 1] || null);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(responses[currentStep - 1] || null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (userName || selectedOption)) {
      handleNext();
    }
  };

  const isNextDisabled = (isInputQuestion && !userName) || (isOptionQuestion && !selectedOption);

  return (
    <>
      <ProgressBar currentStep={currentStep + 1} totalSteps={questions.length} />
      <SplitContainer onKeyDown={handleKeyDown} tabIndex={0}>
        <Header currentStep={currentStep + 1} totalSteps={questions.length} />
        <TextContainer>
          <LogoDesktop src="/logo.png" alt="Logo Customer Scoops" />
          <QuestionContainer>
            {isFinalStep ? (
              <FinalContent
                text={currentQuestion.text || ""}
                text2={currentQuestion.text2 || ""}
                text3={currentQuestion.text3 || ""}
              />
            ) : (
              <>
                {currentQuestion.text && (
                  <TextContent
                    text={currentQuestion.text}
                    question={currentQuestion.question || ""}
                    userName={userName}
                  />
                )}

                {currentQuestion.question && !currentQuestion.text && (
                  <TextContent
                    question={currentQuestion.question}
                    userName={userName}
                  />
                )}

                {isInputQuestion && (
                  <Input
                    placeholder={currentQuestion.input}
                    value={userName}
                    onChange={handleInputChange}
                  />
                )}

                {isOptionQuestion && (
                  <OptionList
                    options={currentQuestion.options || []}
                    selectedOption={selectedOption}
                    onSelect={setSelectedOption}
                    layout={currentQuestion.layout || 'flex'}
                    showAlphabeticalChips={currentQuestion.showAlphabeticalChips || false}
                  />
                )}
              </>
            )}
          </QuestionContainer>
          {!isFinalStep && (
            <QuestionNavigation
              isFinalStep={isFinalStep}
              isFirstStep={currentStep === 0}
              onNext={handleNext}
              onBack={handleBack}
              isNextDisabled={isNextDisabled}
            />
          )}
        </TextContainer>
      </SplitContainer>
    </>
  );
};
