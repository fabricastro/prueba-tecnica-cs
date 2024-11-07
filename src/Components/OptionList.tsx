import React from 'react';
import OptionButton from '../Components/OptionButton';
import styled, { css } from 'styled-components';

const OptionsContainer = styled.div<{ layout: 'grid' | 'grid2' | 'flex' | 'column' }>`
  margin-top: 1rem;
  gap: 5px;

  ${({ layout }) =>
    layout === 'grid' &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: row;
      width: 100%;

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
    `}

  ${({ layout }) =>
    layout === 'column' &&
    css`
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 5px;

      @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }
    `}
    
  ${({ layout }) =>
    layout === 'grid2' &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: row;
      width: 100%;

      & > *:last-child {
        grid-column: span 2;
      }

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        & > *:last-child {
          grid-column: span 1;
        }
      }
    `}

  ${({ layout }) =>
    layout === 'flex' &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `}
`;

const Chip = styled.span`
  background-color: #00ccbc;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-size: 12px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  @media (min-width: 1200px) {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

interface OptionListProps {
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
  layout: 'grid' | 'grid2' | 'flex' | 'column';
  showAlphabeticalChips?: boolean;
}

const OptionList: React.FC<OptionListProps> = ({
  options,
  selectedOption,
  onSelect,
  layout,
  showAlphabeticalChips,
}) => (
  <OptionsContainer layout={layout}>
    {options.map((option, index) => (
      <OptionButton
        key={option}
        selected={selectedOption === option}
        onClick={() => onSelect(option)}
        layout={layout}
      >
        {showAlphabeticalChips && <Chip>{String.fromCharCode(65 + index)}</Chip>}
        {option}
      </OptionButton>
    ))}
  </OptionsContainer>
);

export default OptionList;
