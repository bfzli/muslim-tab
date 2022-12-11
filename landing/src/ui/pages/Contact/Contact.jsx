import { LogoIcon } from '../../icons';
import { Container, Title, Description } from './Components';
import { Button } from '../../components';

export default function Contact() {
  return (
    <Container>
      <a href='https://muslim-tab.com'>
        <LogoIcon size='2.5em' />
      </a>

      <Title>Contact Us</Title>

      <Description>
        Our team is always ready to review the emails that we receive. If you
        have any questions or suggestions, please contact us via our email
        address, and we will try to respond as soon as we can but please don't
        spam.
      </Description>

      <a href='mailto:muslimtab@benkco.io'>
        <Button text='Send us an email' icon='' />
      </a>
    </Container>
  );
}
