import { LogoIcon } from '../../icons';
import { Container, Loading } from './Components';

export default function Loader() {
  return (
    <Container>
      <Loading>
        <LogoIcon size='2.25em' />
      </Loading>
    </Container>
  );
}
