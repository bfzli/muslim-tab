import Quotes from '../../data/Quotes.json'

import { Element, Name } from "./Components";
import { NextIcon } from "../icons";
import { RandomNumber } from '../../utils';

export default function Next(props) {
  const next = () => {
    props.setContent(Quotes[Math.floor(Math.random() * Quotes.length)] || undefined);
    props.setWallpaper(RandomNumber);
  }

  return (
    <Element onClick={next}>
      <NextIcon size="1.6em" />
      <Name>Next</Name>
    </Element>
  );
}
