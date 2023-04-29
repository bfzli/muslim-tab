import { Element, Name } from "./Components";
import { MoreIcon } from "../icons";

export default function More() {
  return (
    <Element onClick={() => window.open('https://browserwings.com', "_blank")}>
      <MoreIcon size="1.6em" />
      <Name>More</Name>
    </Element>
  );
}
