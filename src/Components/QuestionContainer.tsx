import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

interface QuestionContainerProps {
  children: React.ReactNode;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default QuestionContainer;
