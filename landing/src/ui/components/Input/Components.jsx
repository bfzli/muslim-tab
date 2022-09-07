import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid #eaeef2;
  border-radius: 0.75em;
  padding: 0.75em;
  background: transparent;
  transition: all ease-in-out 0.3s;
  font-weight: 500;

  &:focus {
    border: 1px solid #333;
  }
`;

const Label = styled.label`
  font-size: 0.85em;
  font-weight: bold;
  color: #777;
  margin-bottom: 0.25em;
  margin-top: 0.5em;
`;

export { Container, Input, Label };
