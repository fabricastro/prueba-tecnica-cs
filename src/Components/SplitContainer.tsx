import styled from 'styled-components';

const SplitContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* Ajustes para escritorio */
  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    margin: 0 auto;
    padding: 0;
    justify-content: space-between;
    height: 100%;
  }
`;

export default SplitContainer;
