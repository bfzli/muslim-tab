import styled from 'styled-components';

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
  transition: var(--transition);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Element = styled.section`
  width: 92px;
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1em;
  border-radius: var(--radius);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    background: var(--hover);
  }

  &:last-of-type {
    margin-right: 0em;
  }
`;

const Linebreak = styled.section`
  width: 1px;
  height: 64px;
  background: #e6e6e650;
  margin: 0em .75em;
`;

const Name = styled.p`
  font-size: 1.15em;
  text-align: center;
  font-weight: 400;
  margin-top: 0.75em;
  color: #fff;
`;

const Breakspace = styled.section`
  margin: 0em .25em;
`

export { Container, Elements, Element, Name, Linebreak, Breakspace };
