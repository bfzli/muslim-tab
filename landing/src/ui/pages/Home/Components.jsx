import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 5% 12.5% 7.5% 12.5%;
  aling-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    width: 75%;
    font-size: 50px;
    font-weight: 900;
    color: #2F2F2F;
    margin-top: .5em;
    line-height: 125%;
`;

const Description = styled.p`
    width: 75%;
    font-size: 1.15em;
    margin-top: .65em;
    margin-left: .1em;
    margin-bottom: .5em;
    color: #2F2F2F95;
    line-height: 150%;
`;

export { Container, Title, Description };
