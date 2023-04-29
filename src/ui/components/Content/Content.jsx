import { Container, Text, Reference } from "./Components";
import { Footer, Logo } from "..";
import { useEffect, useState } from "react";
import { ContentGenerator, InitalMode, RandomNumber, mb_2, mb_30, mt_2, mt_30 } from '../../../utils';

export default function Content() {
  const [mode, setMode] = useState(InitalMode());
  const [content, setContent] = useState(ContentGenerator(mode, null, true))
  const [wallpaper, setWallpaper] = useState(RandomNumber)
  const [isHover, setIsHover] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const top = isHover === false ? mt_30 : mt_2;
  const bottom = isHover === false ? mb_30 : mb_2;

  const link = mode === "quote" ? `https://www.google.com/search?q=${content?.reference_content}` : content?.reference_link

  useEffect(() => {
    setWallpaper(RandomNumber);
    ContentGenerator(mode, setContent, false);
  }, [mode])

  return (
    <Container background={`/backgrounds/${wallpaper}.webp`}>
      <Logo top={top} setIsHover={setIsHover} />

      <Text>
        {content?.main_content}

        <Reference href={link} target="_blank">
          {content?.reference_content}
        </Reference>
      </Text>

      <Footer
        mode={mode}
        setMode={setMode}
        content={content}
        setContent={setContent}
        setWallpaper={setWallpaper}
        bottom={bottom}
        setIsHover={setIsHover}
        isModal={isModal}
        setModal={setIsModal}
      />
    </Container>
  );
}
