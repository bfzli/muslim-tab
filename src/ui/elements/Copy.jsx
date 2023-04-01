import { Element, Name } from "./Components";
import { CopiedIcon, CopyIcon } from "../icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Copy as Copier } from "../../utils";

export default function Copy() {
  const [copied, setCopied] = useState(false);
  const content = useSelector((state) => state.content);

  const action = () => (!copied ? Copier(content.quote, setCopied) : "");

  return (
    <Element onClick={action}>
      {copied ? <CopiedIcon size="1.6em" /> : <CopyIcon size="1.6em" />}
      <Name>{copied ? "Copied" : "Copy"}</Name>
    </Element>
  );
}
