import { Element, Name } from "./Components";
import { NextIcon } from "../icons";
import { SetContent } from "../../redux/Content";
import { useDispatch } from "react-redux";

export default function Next() {
  const dispatch = useDispatch();

  return (
    <Element onClick={() => dispatch(SetContent())}>
      <NextIcon size="1.6em" />
      <Name>Next</Name>
    </Element>
  );
}
