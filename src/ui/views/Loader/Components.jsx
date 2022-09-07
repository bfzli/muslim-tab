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

const Error = styled.p`
  width: 50%;
  color: #fff;
  font-size: .9em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.3s;
  text-align: center;
  margin-top: .75em;
`

const Powered = styled.p`
  color: #fff;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2em;
  opacity: 0.85;
  transition: all ease-in-out 0.3s;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export { 
  Container, 
  Loading, 
  Powered, 
  Error
};
