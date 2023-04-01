import { LogoIcon } from "../../icons";
import { Container, Title, Description } from "./Components";
import { Button } from "../../components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Link to="https://entrepreneur-tab.com">
        <LogoIcon size="2.3em" />
      </Link>

      <Title>Entrepreneur reminders on each new tab you open.</Title>

      <Description>
        Entrepreneur Tab is an app that can be installed in browsers as an
        extension. The mission of the app is to remind people with an
        entrepreneur quote on each new tab they open so as to boost their
        productivity and give optimists thoughts to its users daily.
      </Description>

      <Button
        onClick={() =>
          window.open("https://entrepreneur-tab.com/install", "_blank")
        }
        text="Install Entrepreneur Tab"
      />
    </Container>
  );
}
