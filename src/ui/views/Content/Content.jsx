import { useSelector } from "react-redux";
import { Container, Text, Reference } from "./Components";
import { Footer, Logo } from "../../components";
import { useState } from "react";

export default function Content() {
  const content = useSelector((state) => state.Content);

  const [isHover, setIsHover] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const mt_30 = { marginTop: "-30vh" };
  const mt_2 = { marginTop: "-2vh" };

  const mb_30 = { marginBottom: "-30em" };
  const mb_2 = { marginBottom: "-2em" };

  const top = isHover === false ? mt_30 : mt_2;
  const bottom = isHover === false ? mb_30 : mb_2;

  const link = `https://www.google.com/search?q=${content.Author}`;
  const bg = `http://api.entrepreneur-tab.com/${content.Background}`;

  return (
    <Container background={bg}>
      <Logo top={top} setIsHover={setIsHover} />

      <Text>
        {content.Content}

        <Reference href={link} target="_blank">
          {content.Author}
        </Reference>
      </Text>

      <Footer
        bottom={bottom}
        setIsHover={setIsHover}
        isModal={isModal}
        setModal={setIsModal}
      />
    </Container>
  );
}
