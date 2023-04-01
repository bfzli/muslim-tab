import { Element, Name } from "./Components";
import { CameraIcon } from "../icons";

export default function Screenshot() {
  return (
    <Element onClick={() => Screenshot()}>
      <CameraIcon size="1.6em" />
      <Name>Screen</Name>
    </Element>
  );
}
