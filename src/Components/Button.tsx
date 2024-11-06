import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.8rem 2rem;
  font-size: 11px;
  font-family: 'SF Pro', sans-serif;
  font-weight: 500;
  color: #ffffff;
  background-color: #231331;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-block;

  &:hover {
    background-color: #3e2357;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
    background-color: #3e2357;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', disabled = false, className }) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
