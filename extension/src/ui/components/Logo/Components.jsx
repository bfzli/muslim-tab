import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 18vh;
  position: absolute;
  top: 0;
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

export { Container, Elements };
