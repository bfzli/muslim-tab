import { LogoIcon } from "../../icons";
import { Container, Elements } from "./Components";

export default function Logo(props) {
  const enter = () => props.setIsHover(true);
  const leave = () => props.setIsHover(false);

  return (
    <Container onMouseEnter={enter} onMouseLeave={leave}>
      <Elements style={props.top}>
        <a href="https://entrepreneur-tab.com" target="_blank" rel="noreferrer">
          <LogoIcon size="2.3em" />
        </a>
      </Elements>
    </Container>
  );
}
