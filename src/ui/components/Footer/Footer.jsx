import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { languageSwitcher } from '../../../data/redux/Language';
import { viewSwitcher } from '../../../data/redux/View';
import { Contenter, Copy, Languager, Screenshot, Report, Rate } from '../../../data/utils';
import { Variables } from '../../../data/constants';
import { SetContent } from '../../../data/redux/Content';

import {
  Container,
  Elements,
  Element,
  Name,
  Linebreak,
  Breakspace,
} from './Components';

import {
  CopyIcon,
  NextIcon,
  DonateIcon,
  EnglishIcon,
  AlbanianIcon,
  HadithIcon,
  QuoteIcon,
  VerseIcon,
  CameraIcon,
  CopiedIcon,
  FeedbackIcon,
  RateIcon,
} from '../../icons';

export default function Footer(props) {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const view = useSelector((state) => state.view);
  const language = useSelector((state) => state.language);
  const t = useSelector((state) => state.language.t);
  const [copied, setCopied] = useState(false);

  return (
    <Container
      data-html2canvas-ignore
      onMouseEnter={() => props.setIsHover(true)}
      onMouseLeave={() => props.setIsHover(false)}>
      <Elements style={props.bottom}>
        <Element onClick={() => Screenshot()}>
          <CameraIcon size='1.6em' />
          <Name>{t.screenshot}</Name>
        </Element>

        <Breakspace />

        <Element
          onClick={() => (!copied ? Copy(content.content, setCopied) : '')}>
          {copied ? <CopiedIcon size='1.6em' /> : <CopyIcon size='1.6em' />}
          <Name>{copied ? t.copied : t.copy}</Name>
        </Element>

        <Breakspace />

        <Element onClick={() => dispatch(SetContent())}>
          <NextIcon size='1.6em' />
          <Name>{t.random}</Name>
        </Element>

        <Breakspace />

        <Element
          onClick={() => dispatch(languageSwitcher(Languager(language.value)))}>
          {
            {
              english: (
                <>
                  <EnglishIcon size='1.6em' />
                  <Name>{t.en}</Name>
                </>
              ),
              shqip: (
                <>
                  <AlbanianIcon size='1.6em' />
                  <Name>{t.sq}</Name>
                </>
              ),
            }[language.value]
          }
        </Element>

        <Breakspace />

        <Element onClick={() => dispatch(viewSwitcher(Contenter(view.value)))}>
          {
            {
              verse: (
                <>
                  <VerseIcon size='1.6em' />
                  <Name>{t.verses}</Name>
                </>
              ),
              hadith: (
                <>
                  <HadithIcon size='1.6em' />
                  <Name>{t.hadiths}</Name>
                </>
              ),
              quote: (
                <>
                  <QuoteIcon size='1.6em' />
                  <Name>{t.quotes}</Name>
                </>
              ),
            }[view.value]
          }
        </Element>

        <Breakspace />
        <Linebreak />

        <Element onClick={() => Report()}>
          <FeedbackIcon size='1.6em' />
          <Name>{t.git}</Name>
        </Element>

        <Breakspace />

        <Element onClick={() => Rate()}>
          <RateIcon size='1.6em' />
          <Name>{t.rate}</Name>
        </Element>

        <Breakspace />

        <Element onClick={() => window.open(Variables.patreon, '_blank')}>
          <DonateIcon size='1.6em' />
          <Name>{t.donate}</Name>
        </Element>
      </Elements>
    </Container>
  );
}
