import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader, Content } from "./ui/views";
import { SetContent } from "./data/redux/Content";

export default function Application() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);

  useEffect(() => dispatch(SetContent()), []);

  const isLoaded = content.status === true;

  if (isLoaded) return <Content id="screen" />;
  else return <Loader stauts={content.status} />;
}
