import { Link } from "react-router-dom";
import { LogoIcon } from "../../icons";
import { Container, Title, Description } from "./Components";

export default function Home() {
  return (
    <Container>
      <Link to="https://entrepreneur-tab.com">
        <LogoIcon size="2.3em" />
      </Link>

      <Title>Privacy Policy</Title>

      <Description>
        We believe privacy is a fundamental human right. You can do anything
        with our apps (extensions) all privately. Not because you have something
        to hide, but because you have a lot to protect.
        <br />
        <br />
        Protecting your privacy is all about having control over your data. At
        Muslim Tab and all its services, we help you control and protect what's
        yours, actually, it's your data, not big data!
        <br />
        <br />
        If you would ask us why you don't collect data the answer is simple It's
        the best way to safeguard your privacy. If information isn't collected,
        it can't be stolen, demanded, leaked, or abused.
      </Description>
    </Container>
  );
}
