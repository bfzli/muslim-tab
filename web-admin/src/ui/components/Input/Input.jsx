import { Container, Label, Input as Inputer } from './Components';

export default function Input(props) {
  return (
    <Container>
        {props.label && <Label>{props.label}</Label>}
        <Inputer type={props.type || 'text'} {...props} />
    </Container>
  )
}
