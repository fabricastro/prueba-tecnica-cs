import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #23133180;
  outline: none;
  color: #231331;
  &::placeholder {
    font-family: 'SF Pro', sans-serif;
    font-size: 17px;
    color: #23133180;
  }

  &:focus {
    border-bottom: 1px solid #4A148C;
  }
 
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

export default StyledInput;
