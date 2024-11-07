import React, { useEffect } from 'react';
import { Question } from './Views/Question';
import { SurveyProvider, useSurvey } from './Context/SurveyContext';

const AppContent: React.FC = () => {
  const { backgroundColor } = useSurvey();

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
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
