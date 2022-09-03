import { Container, Label, Input as Inputer } from './Components';

export default function Select(props) {
  return (
    <Container>
      {
        props.label && 
          <Label>{props.label}</Label>
      }

      <Inputer>
        <option value="english">English</option>
        <option value="shqip">Albanian</option>
      </Inputer>
    </Container>
  );
}
