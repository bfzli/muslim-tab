import { Container, Elements, Linebreak, Breakspace } from "./Components";

import {
  Account,
  Contact,
  Favorite,
  Favorites,
  More,
  Next,
  Pro,
  Screenshot,
  Copy,
} from "../../elements";

export default function Footer(props) {
  const enter = () => props.setIsHover(true);
  const leave = () => props.setIsHover(false);

  return (
    <Container onMouseEnter={enter} onMouseLeave={leave}>
      <Elements style={props.bottom}>
        <Screenshot />
        <Breakspace />
        <Copy />
        <Breakspace />
        <Favorite />
        <Breakspace />
        <Next />
        <Breakspace />
        <Linebreak />
        <Breakspace />
        <Favorites />
        <Breakspace />
        <Pro />
        <Breakspace />
        <Account />
        <Breakspace />
        <Linebreak />
        <Breakspace />
        <Contact />
        <Breakspace />
        <More />
      </Elements>
    </Container>
  );
}
