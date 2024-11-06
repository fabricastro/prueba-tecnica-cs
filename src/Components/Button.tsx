import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.8rem 2rem;
  font-size: 11px;
  font-family: 'SF Pro', sans-serif;
  font-weight: 500;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  max-height: 35px;
  /* Estilos comunes para todos los botones */
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  /* Estilos específicos para variantes */
  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: #231331;
      color: #ffffff;

      &:hover {
        background-color: #3e2357;
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: #ffffff;
      color: #231331;
      border: 2px solid #231331;

      &:hover {
        background-color: #f0f0f0;
      }
    `}

  ${({ variant }) =>
    variant === 'tertiary' &&
    css`
      padding: 0rem 0rem;
      background-color: #ffffff;
      color: #231331;
      border: 1px solid #231331;
      border-radius: 100%;
      height: 35px;
      width: 35px;
      align-items: center;
      &:hover {
        background-color: #f0f0f0;
      }
    `}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className,
  variant = 'primary'
}) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled} className={className} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
