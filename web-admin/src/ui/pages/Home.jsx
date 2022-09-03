import { useEffect } from 'react';
import { FetchContent } from '../../methods';
import { Content, Header, Form, Authenticator, Notification, Confirmation } from '../components';
import { Container } from './Components';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.Content);

  useEffect(() => { if (content.Content === null) FetchContent(dispatch) });

  return (
    <Container>
      <Header />
      <Content />

      <Form />
      <Authenticator />
      <Notification />
      <Confirmation />
    </Container>
  );
}
