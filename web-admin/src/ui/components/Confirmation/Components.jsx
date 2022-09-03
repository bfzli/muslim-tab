import styled from 'styled-components';

const Container = styled.section`
  width: 520px;
  height: 240px;
  background: #fff;
  border-radius: 1em;
  border: 1px solid #eaeef2;
  margin-top: 1em;
  padding: 1em;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 9999999;
`;

const Overlay = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #33333350;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Clickable = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export { 
  Container, 
  Overlay, 
  Clickable
};
