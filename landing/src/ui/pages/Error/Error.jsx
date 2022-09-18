import { Container, Title, Description } from './Components';

export default function Error() {
  return (
    <Container>
      <Title>Not Found!</Title>

      <Description>
        Something wen't wrong while trying to find this page.
      </Description>
    </Container>
  );
}
