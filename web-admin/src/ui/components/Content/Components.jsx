import styled from 'styled-components';

const Container = styled.section`
  height: auto;
  width: 100%;
  background: #fff;
  border-radius: 1em;
  border: 1px solid #eaeef2;
  margin-top: 1em;
  padding: 1em;
  position: relative;
`;

const Contenter = styled.section`
  width: 100%;
  background: #fff;
  padding: 0.5em;
  border: 1px solid #eaeef2;
  border-radius: 0.5em;
  margin-bottom: 1em;
`;

const Language = styled.section`
  display: flex;
  padding: 0.15em 0.5em;
  background: #3f967250;
  border-radius: 99px;
  font-size: 0.8em;
  color: black;
  border: 1px solid #3f9672;
  user-select: none;
  text-transform: capitalize;
`;

const Category = styled.section`
  display: flex;
  padding: 0.15em 0.5em;
  background: #f2672250;
  border-radius: 99px;
  font-size: 0.8em;
  color: black;
  border: 1px solid #f26722;
  user-select: none;
  margin-right: 0.5em;
  text-transform: capitalize;
`;

const Informer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 0.25em;
`;

const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Body = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1em;
  margin-bottom: 0.5em;
  margin-left: 0.1em;
  margin-top: 0.5em;
`;

const Reference = styled.a`
  color: #888;
  font-weight: bold;
  font-size: 0.9em;
  margin-left: 0.1em;
`;

const Hoverer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25em;
  border-radius: 99px;

  &:hover {
    cursor: pointer;
    background: #00000010;
    transition: all ease-in-out 0.3s;
  }
`;

const Heading = styled.h1`
  font-size: 1.5em;
`;

const Linebreak = styled.section`
  width: 100%;
  height: 1px;
  background: #eaeef2;
  margin: 1em 0;
`;

const Navigation = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em 0;
`;

const Configs = styled.section`
  display: flex;
  align-items: center;
`

const Loading = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  user-select: none;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0em 25%;
  
  h1{
    text-align: center;
    font-size: 1.5em;
  }

  p{
    text-align: center;
  }
`

export {
  Container,
  Contenter,
  Language,
  Category,
  Informer,
  Header,
  Body,
  Title,
  Reference,
  Hoverer,
  Heading,
  Linebreak,
  Navigation,
  Configs,
  Loading
};
