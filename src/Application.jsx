import { Loader, Content } from "./ui/views";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetContent } from "./redux/Content";
import { Checker, Content as Fetch } from "./methods";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "./configs/Firebase";

export default function Application() {
  const dispatch = useDispatch();

  const content = useSelector((state) => state.Content);
  const account = useSelector((state) => state.Account);

  useEffect(() => {
    const pass = account.Loading;
    const action = async (user) => Checker(user, dispatch);
    if (pass) onAuthStateChanged(Auth, action);
  }, [account]);

  useEffect(() => {
    if (!account.Loading) {
      const quote = Fetch(true);

      quote.then((q) => {
        if (!content.Loaded) {
          dispatch(SetContent(q));
        }
      });
    }
  }, [account, content]);

  if (!content.Loading) return <Content id="screen" />;
  else return <Loader />;
}
