import { BenkcoIcon, LogoIcon } from '../../icons';
import { Container, Loading, Powered, Error } from './Components';
import { Variables } from '../../../data/constants';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [time, setTime] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setTime((prev) => prev + 1);
      }, 1000
    );

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    time > 5 && setError(true);
    time > 15 && window.location.reload();
  }, [time]);

  return (
    <Container>
      <Loading>
        <LogoIcon size='2.25em' />
        {error && (
          <Error>
            You are having connection issues. Trying to reconnect, If you think this a problem,
            contact us at muslimtab@benkco.io.
          </Error>
        )}
      </Loading>

      <Powered onClick={() => window.open(Variables.benkco, '_blank')}>
        Powered by&nbsp; <BenkcoIcon color='#fff' size='4em' />
      </Powered>
    </Container>
  );
}
