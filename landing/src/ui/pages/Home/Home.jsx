import { LogoIcon } from '../../icons';
import { Container, Title, Description } from './Components';
import { Button } from '../../components';

export default function Home() {
  return (
    <Container>
      <a href='https://muslim-tab.com'>
        <LogoIcon size='2.5em' />
      </a>

      <Title>Islamic reminders on each new tab you open.</Title>

      <Description>
        Muslim Tab is an Islamic reminder app that can be installed in browsers
        as an extension. The mission of the app is to remind people when they
        are using their devices on each new tab they open.
      </Description>

      <Button
        onClick={() => window.open('https://muslim-tab.com/install', '_blank')}
        text='Install Muslim Tab'
        icon=''
      />
    </Container>
  );
}
