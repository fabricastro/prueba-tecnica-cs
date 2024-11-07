import styled from 'styled-components';

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 35px;
  @media (min-width: 1200px) {
    padding-left: 160px;
    padding-right: 100px;
  }
`;

export default TextContainer;
