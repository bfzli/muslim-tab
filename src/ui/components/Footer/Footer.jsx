import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { languageSwitcher } from '../../../data/redux/Language';
import { viewSwitcher } from '../../../data/redux/View';
import { Contenter, Copy, Languager, Screenshot, Report, Rate } from '../../../data/utils';
import { Variables } from '../../../data/constants';
import { useTranslation } from 'react-i18next';
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
  const [copied, setCopied] = useState(false);

  return (
    <Container
      data-html2canvas-ignore
      onMouseEnter={() => props.setIsHover(true)}
      onMouseLeave={() => props.setIsHover(false)}>
      <Elements style={props.bottom}>
        <Element onClick={() => Screenshot()}>
          <CameraIcon size='1.6em' />
          <Name>Screen</Name>
        </Element>

        <Breakspace />

        <Element
          onClick={() => (!copied ? Copy(content.content, setCopied) : '')}>
          {copied ? <CopiedIcon size='1.6em' /> : <CopyIcon size='1.6em' />}
          <Name>{copied ? 'Copied' : 'Copy'}</Name>
        </Element>

        <Breakspace />

        <Element onClick={() => dispatch(SetContent())}>
          <NextIcon size='1.6em' />
          <Name>Random</Name>
        </Element>

        <Breakspace />

        <Element
          onClick={() => dispatch(languageSwitcher(Languager(language.value)))}>
          {
            {
              english: (
                <>
                  <EnglishIcon size='1.6em' />
                  <Name>English</Name>
                </>
              ),
              shqip: (
                <>
                  <AlbanianIcon size='1.6em' />
                  <Name>Shqip</Name>
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
                  <Name>Verses</Name>
                </>
              ),
              hadith: (
                <>
                  <HadithIcon size='1.6em' />
                  <Name>Hadiths</Name>
                </>
              ),
              quote: (
                <>
                  <QuoteIcon size='1.6em' />
                  <Name>Quotes</Name>
                </>
              ),
            }[view.value]
          }
        </Element>

        <Breakspace />
        <Linebreak />

        <Element onClick={() => Report()}>
          <FeedbackIcon size='1.6em' />
          <Name>GitHub</Name>
        </Element>

        <Breakspace />

        <Element onClick={() => Rate()}>
          <RateIcon size='1.6em' />
          <Name>Rate</Name>
        </Element>

        <Breakspace />

        <Element onClick={() => window.open(Variables.patreon, '_blank')}>
          <DonateIcon size='1.6em' />
          <Name>Donate</Name>
        </Element>
      </Elements>
    </Container>
  );
}
