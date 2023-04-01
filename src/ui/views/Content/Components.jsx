import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: url('${(props) => props.background}');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center center;
`;

const Text = styled.h2`
  width: 100%;
  height: 100%;
  font-size: 2.9em;
  font-weight: 500;
  letter-spacing: 0.85px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0em 15%;
  text-align: center;
  color: white !important;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: white;
  -webkit-animation: fill 0.5s infinite alternate;
  background: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 1000px) {
    font-size: 2.75em;
  }

  @media only screen and (max-width: 850px) {
    font-size: 2.5em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 2.25em !important;
  }
`;

const Reference = styled.a`
  margin-top: 1em;
  padding: 0.3em 0.7em;
  border-radius: 0.75em;
  transition: all ease-in-out 0.3s;
  font-size: 0.35em !important;
  z-index: 100;
  color: white !important;
  -webkit-text-stroke: 0px white;
  -webkit-text-fill-color: white;

  &:hover {
    background: #383e4760;
    cursor: pointer;
  }
`;

export { Container, Text, Reference };
