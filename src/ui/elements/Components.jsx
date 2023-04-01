import styled from "styled-components";

const Element = styled.section`
  width: 92px;
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1em;
  border-radius: 0.75em;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    background: #383e4760;
  }

  &:last-of-type {
    margin-right: 0em;
  }
`;

const Name = styled.p`
  font-size: 1.15em;
  text-align: center;
  font-weight: 400;
  margin-top: 0.75em;
  color: #fff;
`;

export { Element, Name };
