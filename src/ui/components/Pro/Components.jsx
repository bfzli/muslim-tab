import styled from "styled-components";

const Container = styled.section`
  width: 400px;
  height: 500px;
  border-radius: 1em;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  z-index: 999;
  background: #fafafa;
  padding: 2em;
`;

const Title = styled.b`
  font-size: 2em;
`;

const Description = styled.p`
  font-size: 1.05em;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75em;
  border-radius: 0.25em;
  border: 1px solid #333;
  background: #333;
  font-size: 1.1em;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-top: 0.5em;
  transition: all ease-in-out 0.3s;
`;

const List = styled.ul`
  display: flex;
  margin-top: 1em;
  flex-direction: column;
`;

const Item = styled.li`
  display: flex;
  font-size: 1.075em;
`;

export { Container, Title, Description, Button, List, Item };
