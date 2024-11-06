import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SurveyContextProps {
    currentStep: number;
    setCurrentStep: (step: number) => void;
    responses: { [key: number]: string };
    setResponse: (questionId: number, answer: string) => void;
    userName: string;
    setUserName: (name: string) => void;
}

const SurveyContext = createContext<SurveyContextProps | undefined>(undefined);

export const SurveyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [responses, setResponses] = useState<{ [key: number]: string }>({});
    const [userName, setUserName] = useState('');

    const setResponse = (questionId: number, answer: string) => {
        setResponses((prevResponses) => ({ ...prevResponses, [questionId]: answer }));
    };

    return (
        <SurveyContext.Provider value={{ currentStep, setCurrentStep, responses, setResponse, userName, setUserName }}>
            {children}
        </SurveyContext.Provider>
    );
};

export const useSurvey = (): SurveyContextProps => {
    const context = useContext(SurveyContext);
    if (!context) {
        throw new Error('useSurvey must be used within a SurveyProvider');
    }
    return context;
};
