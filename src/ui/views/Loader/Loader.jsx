import { BenkcoIcon, LogoIcon } from '../../icons';
import { Container, Loading, Powered } from './Components';
import { Variables } from '../../../data/constants';

export default function Loader() {
  return (
    <Container>
      <Loading>
        <LogoIcon size='2.25em' />
      </Loading>

      <Powered href={Variables.benkco} target="_blank">
        Powered by&nbsp; <BenkcoIcon style={{marginTop: '1px'}} color='#fff' size='4em' />
      </Powered>
    </Container>
  );
}
