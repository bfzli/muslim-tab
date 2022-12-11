import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Copy, Screenshot, Rate } from '../../../data/utils';
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
  CameraIcon,
  CopiedIcon,
  RateIcon,
} from '../../icons';

export default function Footer(props) {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
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
          onClick={() => (!copied ? Copy(content.quote, setCopied) : '')}>
          {copied ? <CopiedIcon size='1.6em' /> : <CopyIcon size='1.6em' />}
          <Name>{copied ? "Copied" : "Copy"}</Name>
        </Element>

      <Breakspace />

        <Element onClick={() => dispatch(SetContent())}>
          <NextIcon size='1.6em' />
          <Name>Next</Name>
        </Element>

        <Breakspace />

        <Breakspace />

        <Breakspace />
        <Linebreak />

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
