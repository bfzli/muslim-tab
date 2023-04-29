import { Element, Name } from "./Components";
import { CopiedIcon, CopyIcon } from "../icons";
import { useState } from "react";
import { CopyToClipboard } from "../../utils";

export default function Copy({content}) {
  const [copied, setCopied] = useState(false);

  const action = () => (!copied ? CopyToClipboard(content?.main_content, setCopied) : "");

  return (
    <Element onClick={action}>
      {copied ? <CopiedIcon size="1.6em" /> : <CopyIcon size="1.6em" />}
      <Name>{copied ? "Copied" : "Copy"}</Name>
    </Element>
  );
}
