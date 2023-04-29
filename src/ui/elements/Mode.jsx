import { Element, Name } from "./Components";
import { HadithIcon, QuoteIcon, VerseIcon } from "../icons";
import { ModeSwitcher } from "../../utils";

export default function Mode({ mode, setMode }) {
  const action = ()  => ModeSwitcher(mode, setMode);

  return (
    <Element onClick={action} >
      {{
        verse: <VerseIcon size="1.6em" />,
        hadith: <HadithIcon size="1.6em" />,
        quote: <QuoteIcon size="1.6em" />,
      }[mode]}

      <Name>
        {{
          verse: "Verses",
          hadith: "Hadiths",
          quote: "Quotes",
        }[mode]}
      </Name>
    </Element>
  );
}
