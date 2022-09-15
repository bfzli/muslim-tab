import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background: #323232;
`;

const Loading = styled.section`
  animation: shine 2s infinite 2s;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @keyframes shine {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export { 
  Container, 
  Loading, 
};
