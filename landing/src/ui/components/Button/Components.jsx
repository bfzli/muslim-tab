import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  border: 1px solid #eaeef2;
  border-radius: 0.75em;
  padding: 0.75em;
  background: #2F2F2F;
  transition: all ease-in-out 0.3s;
  width: fit-content;
  block-size: fit-content;
  margin-top: 1em;
  color: #fff;
  font-weight: bold;
  aling-items: center;
  transition: all ease-in-out .3s;

  &:hover{
    background: #494646;
    cursor: pointer;
  }
`;

export { Container };
