import { Container, Elements, Linebreak, Breakspace } from "./Components";
import { Contact, More, Next, Copy, Donate, Mode } from "../../elements";

export default function Footer(props) {
  const enter = () => props.setIsHover(true);
  const leave = () => props.setIsHover(false);

  return (
    <Container onMouseEnter={enter} onMouseLeave={leave}>
      <Elements style={props.bottom}>
        <Breakspace />
        <Copy {...props} />
        <Breakspace />
        <Mode {...props} />
        <Breakspace />
        <Next {...props} />
        <Breakspace />
        <Linebreak />
        <Breakspace />
        <Contact />
        <Breakspace />
        <Donate />
        <Breakspace />
        <More />
      </Elements>
    </Container>
  );
}
