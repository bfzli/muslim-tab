import { LogoIcon } from '../../icons';
import { Container, Title, Description } from './Components';
import { Button } from '../../components';

export default function Home() {
  return (
    <Container>
      <LogoIcon />

      {/* <Title>Islamic reminders on each new tab you open.</Title>

      <Description>
        Muslim Tab is an Islamic reminder app that can be installed in browsers
        as an extension. The mission of the app is to remind people when they
        are using their devices on each new tab they open.
      </Description> */}

      <Title>Coming Soon</Title>

      <Description>
        After the 5.0 update, we've decided to redesign the official website.
        We'll be back soon.
      </Description>

      <div style={{ display: 'flex', marginTop: '1.75em' }}>
        <Button text='Install Muslim Tab' icon='' />
{/* 
        <Button text='Get on Firefox' icon='' />

        <Button text='Get on Edge' /> */}
      </div>

      {/* <img
        style={{ marginTop: '1em' }}
        width='100%'
        src='./screenshot.png'
        alt='Reminders'
        icon=""
      /> */}
    </Container>
  );
}
