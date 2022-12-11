import { LogoIcon } from '../../icons';
import { Container, Elements } from './Components';

export default function Logo(props) {
  return (
    <Container
      data-html2canvas-ignore
      onMouseEnter={() => props.setIsHover(true)}
      onMouseLeave={() => props.setIsHover(false)}>
      <Elements style={props.top}>
        <a href='https://muslim-tab.com' target='_blank' rel='noreferrer'>
          <LogoIcon size='3em' />
        </a>
      </Elements>
    </Container>
  );
}
