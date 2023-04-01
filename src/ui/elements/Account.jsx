import { AccountIcon } from "../icons";
import { Element, Name } from "./Components";
import { Auth } from "../../methods";
import { useDispatch } from "react-redux";

export default function Account() {
  const dipsatch = useDispatch();

  return (
    <Element onClick={() => Auth(dipsatch)}>
      <AccountIcon size="1.6em" />
      <Name>Account</Name>
    </Element>
  );
}
