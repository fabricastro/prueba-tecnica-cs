import React, { useEffect } from 'react';
import { Question } from './Views/Question';
import { SurveyProvider, useSurvey } from './Context/SurveyContext';

const AppContent: React.FC = () => {
  const { backgroundColor } = useSurvey();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)");

    const updateBackgroundColor = () => {
      if (mediaQuery.matches) {
        document.body.style.backgroundColor = backgroundColor;
      } else {
        document.body.style.backgroundColor = "#FFFFFF"; 
      }
    };

    updateBackgroundColor();
    mediaQuery.addEventListener("change", updateBackgroundColor); 

    return () => {
      mediaQuery.removeEventListener("change", updateBackgroundColor); 
    };
  }, [backgroundColor]);

  return <Question />;
};

const App: React.FC = () => {
  return (
    <SurveyProvider>
      <div className='App'>
        <AppContent />
      </div>
    </SurveyProvider>
  );
};

export default App;
