import React from 'react'
import { Question } from './Views/Question';
import { SurveyProvider } from './Context/SurveyContext';

const App: React.FC = () => {
  return (
    <>
      <div className='App'>
        <SurveyProvider>
          <Question />
        </SurveyProvider>
      </div>
    </>
  )
}

export default App
