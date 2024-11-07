import React from 'react';
import styled, { css } from 'styled-components';

interface OptionButtonProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
  layout?: 'grid' | 'flex' | 'column' | 'grid2';
}

const StyledOptionButton = styled.button<OptionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => (selected ? '#fff' : '#231331')};
  padding: 0.8rem 1.2rem;
  font-size: 12px;
  border-radius: 30px;
  border: ${({ selected }) => (selected ? '1px solid #4a148c' : '1px solid #231331')};
  background-color: ${({ selected }) => (selected ? '#231331' : '#f9f9f9')};
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
  flex: 1;
  height: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #231331;
    color: #fff;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
    min-height: 50px;
    padding: 0.6rem 1rem;
  }

  ${({ layout }) =>
    layout === 'grid' &&
    css`
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: 100%;
    `}

  ${({ layout }) =>
    layout === 'flex' &&
    css`
      width: auto;
      margin: 0.5rem 0;
    `}
  
  ${({ layout }) =>
    layout === 'column' &&
    css`
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 4px 6px;

      @media (min-width: 1200px) {
        padding: 0.6rem 1rem;
      }
    `}
`;

const OptionButton: React.FC<OptionButtonProps> = ({ children, selected, onClick, layout = 'flex' }) => {
  return (
    <StyledOptionButton selected={selected} onClick={onClick} layout={layout}>
      {children}
    </StyledOptionButton>
  );
};

export default OptionButton;
