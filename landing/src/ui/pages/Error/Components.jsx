import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 7.5% 12.5%;
`;

const LeftSide = styled.section`
  width: 50%;
  height: 100%;
  background: blue;
`;

const RightSide = styled.section`
  width: 50%;
  height: 100%;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
    /* font-size: 3.5em; */
    font-size: 73px;
    font-weight: bold;
    color: #333;
`;

const Description = styled.p`
    font-size: 1.15em;
    margin-top: .25em;
    margin-left: .2em;
    margin-bottom: 1em;
`;

export { Container, LeftSide, RightSide, Title, Description };
