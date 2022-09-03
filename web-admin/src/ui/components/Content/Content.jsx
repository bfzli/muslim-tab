import { OpenForm } from '../../../data/redux/FormSlice';
import { DeleteContent } from '../../../methods';
import { useDispatch, useSelector } from 'react-redux';
import { OpenConfirmation } from '../../../data/redux/ConfirmationSlice';

import {
  PeenToolIcon,
  PlusIcon,
  TrashIcon,
  UnauthenticatedIcon,
} from '../../icons';

import {
  Container,
  Contenter,
  Language,
  Category,
  Informer,
  Header,
  Body,
  Title,
  Reference,
  Hoverer,
  Heading,
  Linebreak,
  Navigation,
  Configs,
  Loading,
} from './Components';

export default function Content() {
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.Authentication);
  const content = useSelector((state) => state.Content);

  return (
    <Container>
      <Navigation>
        <Heading>All Content</Heading>

        {authentication.Authenticated === true && (
          <Configs>
            <Hoverer onClick={() => dispatch(OpenForm())}>
              <PlusIcon />
            </Hoverer>
          </Configs>
        )}
      </Navigation>

      <Linebreak />

      {content.Content === null || content.LimitedContent === null ? (
        <div style={{ height: '260px' }}>
          <Loading>
            <lottie-player
              src='https://assets7.lottiefiles.com/private_files/lf30_fup2uejx.json'
              background='transparent'
              speed='1'
              style={{
                width: '50%',
                height: 'auto',
                marginTop: '4em',
                marginBottom: '.5em',
              }}
              loop
              autoplay
            />
            <h1>Loading Content</h1>
            <p>We are loading the content for you, please wait a moment.</p>
          </Loading>
        </div>
      ) : (
        content[
          authentication.Authenticated ? 'Content' : 'LimitedContent'
        ].map((item, index) => (
          <section key={index}>
            {!authentication.Authenticated && (
              <Loading>
                <UnauthenticatedIcon size='2em' />
                <h1>Please Authenticate</h1>
                <p>
                  For you to operate on this paltform you need to authentiacte
                  using a secret code that you can enter at the top right side
                  of the header.
                </p>
              </Loading>
            )}

            <Contenter
              style={!authentication.Authenticated ? { opacity: '.1' } : {}}>
              <Header>
                <Informer>
                  <Category>{item.category}</Category>
                  <Language>{item.language}</Language>
                </Informer>
                <Informer>
                  <Hoverer
                    style={{ marginRight: '.5em' }}
                    onClick={() => {
                      dispatch(
                        OpenForm(
                          {
                            Id: item._id,
                            Content: item.content,
                            Arabic: item.arabic,
                            Category: item.category,
                            Language: item.language,
                            Reference: item.reference,
                            Mode: 'edit',
                          }
                        )
                      );
                    }}>
                    <PeenToolIcon />
                  </Hoverer>

                  <Hoverer
                    onClick={() => {
                      dispatch(
                        OpenConfirmation({
                          Title: 'Delete Content',
                          Message: 'Are you sure you want to delete this content?',
                          Status: 'error',
                          OnConfirm: () => DeleteContent(dispatch, item._id),
                        })
                      );
                    }}>
                    <TrashIcon />
                  </Hoverer>
                </Informer>
              </Header>

              <Body>
                <Title>{item.content}</Title>
                <Reference href={item.website} target='_blank'>
                  {item.reference} (Link: {item.website})
                </Reference>
              </Body>
            </Contenter>
          </section>
        ))
      )}
    </Container>
  );
}
