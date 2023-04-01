import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 18vh;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  z-index: 999;
`;

const Elements = styled.section`
  transition: all ease-in-out 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Linebreak = styled.section`
  width: 1px;
  height: 64px;
  background: #e6e6e650;
  margin: 0em 0.75em;
`;

const Breakspace = styled.section`
  margin: 0em 0.25em;
`;

export { Container, Elements, Linebreak, Breakspace };
