import { LogoIcon } from "../../icons";
import { Container, Title, Description } from "./Components";
import { Button } from "../../components";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Container>
      <Link to="https://entrepreneur-tab.com">
        <LogoIcon size="2.3em" />
      </Link>

      <Title>Contact Us</Title>

      <Description>
        Our team is always ready to review the emails that we receive. If you
        have any questions or suggestions, please contact us via our email
        address, and we will try to respond as soon as we can but please don't
        spam.
      </Description>

      <a href="mailto:entrepreneurtab@benkco.io">
        <Button text="Send us an email" />
      </a>
    </Container>
  );
}
