import { LogoIcon } from '../../icons';
import { Container } from './Components';

export default function Button(props) {
  return (
    <Container {...props}>
      <LogoIcon style={{marginRight: '.75em', marginBottom: '.25em'}} color='#fff' size='1.25em' />

      {props.text}
    </Container>
  );
}
