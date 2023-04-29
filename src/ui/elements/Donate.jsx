import {CupIcon} from "../icons";
import { Element, Name } from "./Components";

export default function Donate() {
  return (
    <Element onClick={() => window.open('https://buymeacoffee.com/browserwings', "_blank")}>
      <CupIcon size="1.6em" />
      <Name>Donate</Name>
    </Element>
  );
}
