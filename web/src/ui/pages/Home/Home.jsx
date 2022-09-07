import { LogoIcon } from '../../icons';
import { Container, Title, Description } from './Components';
import { Button } from '../../components'

export default function Home() {
  return (
    <Container>
      <LogoIcon />

      <Title>Islamic reminders on each new tab you open.</Title>

      <Description>
        Muslim Tab is an Islamic reminder app that can be installed in browsers
        as an extension. The mission of the app is to remind people when they
        are using their devices on each new tab they open.
      </Description>

      <div style={{ display: 'flex' }}>
        <Button 
          text="Get on Chrome"
          icon=""
         />

        <Button 
          text="Get on Firefox"
          icon=""
         />

        <Button 
          text="Get on Edge"
         />
      </div>

      <img
        style={{ marginTop: '1em' }}
        width='100%'
        src='./screenshot.png'
        alt='Reminders'
        icon=""
      />
    </Container>
  );
}
