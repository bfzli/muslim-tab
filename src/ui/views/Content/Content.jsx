import { useSelector } from 'react-redux';
import { Container, Text, Reference } from './Components';
import { Footer, Logo } from '../../components';
import { useState } from 'react';

export default function Content() {
  const content = useSelector((state) => state.content);
  const [isHover, setIsHover] = useState(false);
  const top = isHover === false ? { marginTop: '-30vh' } : { marginTop: '-2em' };
  const bottom = isHover === false ? { marginBottom: '-30vh' } : { marginBottom: '-2em' };

  return (
    <Container background={`http://api.muslim-tab.com/${content.wallpaper}`}>
      <Logo top={top} setIsHover={setIsHover} />

      <Text>
        {content.content}

        <Reference href={content.linkToReference} target="_blank">
          {content.reference}
        </Reference>
      </Text>

      <Footer bottom={bottom} setIsHover={setIsHover} />
    </Container>
  );
}
