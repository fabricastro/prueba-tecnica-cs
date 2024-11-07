import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
`;

interface TextProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const Text = styled.p<TextProps>`
  font-size: 18px;
  text-align: left;
  color: #231331;
  margin: 0;

  ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return `
          font-weight: bold;
          font-size: 24px;
          color: #231331;

          @media (min-width: 1350px) {
            font-size: 30px;
          }
        `;
            case 'secondary':
                return `
          font-weight: normal;
          font-size: 20px;
          color: #4a4a4a;

          @media (min-width: 1350px) {
            font-size: 30px;
            line-height: 40px;
          }
        `;
            case 'tertiary':
                return `
          font-weight: light;
          font-size: 20px;
          color: #7a7a7a;
          font-style: italic;
          line-height: 26px;
          margin-bottom: 20px;

          @media (min-width: 1350px) {
            font-size: 26px;
            margin-bottom: 60px;
          }
        `;
            default:
                return `
          font-weight: normal;
          font-size: 18px;
          color: #231331;
        `;
        }
    }}
`;
const StyledButton = styled(Button)`
  display: flex;
  width: auto;
  align-self: flex-start;
  text-align: center;

  @media (min-width: 1350px) {
    width: 140px;
    justify-content: center;
  }
`;

interface FinalContentProps {
    text: string;
    text2: string;
    text3: string;
}

const FinalContent: React.FC<FinalContentProps> = ({ text, text2, text3 }) => {
    const renderTextWithBreaks = (text: string) =>
        text.split("<br>").map((line, index) => (
            <span key={index}>
                {line}
                {index < text.split("<br>").length - 1 && <br />}
            </span>
        ));
    return (
        <FinalContainer>
            <Text variant="primary">{text}</Text>
            <Text variant="secondary">{renderTextWithBreaks(text2)}</Text>
            <Text variant="tertiary">{text3}</Text>
            <StyledButton onClick={() => (window.location.href = 'https://customerscoops.com')}>
                Finalizar
            </StyledButton>
        </FinalContainer>
    );
};

export default FinalContent;
