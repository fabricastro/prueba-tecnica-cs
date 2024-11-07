import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    max-width: 120px;
    padding-bottom: 65px
  }
`;

interface LogoDesktopProps {
  src: string;
  alt: string;
}

const LogoDesktop: React.FC<LogoDesktopProps> = ({ src, alt }) => {
  return <StyledLogo src={src} alt={alt} />;
};

export default LogoDesktop;
