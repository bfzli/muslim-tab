import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  background: #fff;
  padding: 0.5em;
  border-radius: 0.5em;
  border: 1px solid ${(props) => (props.status === 'success' ? '#42c72075' : '#c7202075')};
  margin-bottom: 1em;
  position: absolute;
  bottom: 0;
  width: fit-content;
  block-size: fit-content;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 99999999999999999999999999999 !important;

  h1 {
    font-size: 0.95em;
    margin-bottom: 0.1em;
    color: ${(props) => (props.status === 'success' ? '#42c720' : '#c72020')};
  }

  p {
    font-size: 0.9em;
    color: ${(props) => (props.status === 'success' ? '#42c720' : '#c72020')};
  }
`;

export { 
  Container
};
