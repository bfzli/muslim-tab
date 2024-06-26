import { ContactIcon } from "../icons";
import { Element, Name } from "./Components";

export default function Contact() {
  return (
    <Element onClick={() => window.open('mailto:hello@browserwings.com', "_blank")}>
      <ContactIcon size="1.6em" />
      <Name>Contact</Name>
    </Element>
  );
}
