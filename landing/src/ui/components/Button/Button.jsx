import { Container } from "./Components"

export default function Button(props) {
  return (
    <Container {...props}>
        {props.text}
    </Container>
  )
}
