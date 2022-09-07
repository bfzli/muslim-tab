import { Button, Input } from '..';
import { AddContent } from '../../../methods';
import { Container, Overlay, Clickable } from './Components';
import { useDispatch, useSelector } from 'react-redux';
import {
  ChangeCode,
  CloseAuthentication,
} from '../../../data/redux/AuthenticationSlice';

export default function Authenticator() {
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.Authentication);

  if (authentication.Visible)
    return (
      <Overlay>
        <Clickable onClick={() => dispatch(CloseAuthentication())} />

        <Container>
          <Input
            style={authentication.Authenticated ? {opacity: '.25', pointerEvents: 'none'} : {}}
            value={authentication.Code}
            onChange={(e) => dispatch(ChangeCode(e.target.value))}
            label='Secret Code'
            placeholder='12 Digit Secret Code'
          />

          <Button
            onClick={() => dispatch(CloseAuthentication())}
            text='Cancel'
            mode='outline'
            style={{marginRight: '.5em'}}
          />
        
          {!authentication.Authenticated ? (
            <Button
              mode="primary"
              onClick={() => Authorize(dispatch, authentication.Code)}
              text='Authenticate Me'
            />
          ) : (
            <Button
              mode="primary"
              onClick={() => Authorize(dispatch, authentication.Code)}
              text='Unauthenticate Me'
            />
          )}
        </Container>
      </Overlay>
    );
}
