import { Container, Hoverer, Operations } from './Components';
import { OpenAuthentication } from '../../../data/redux/AuthenticationSlice';
import { useDispatch, useSelector } from 'react-redux';

import {
  AauthenticatedIcon,
  LogoIcon,
  MoonIcon,
  SunIcon,
  UnauthenticatedIcon,
} from '../../icons';

export default function Header() {
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.Authentication);

  return (
    <Container>
      <LogoIcon />

      <Operations>
        {/*  
          <Hoverer style={{marginRight: '.5em'}}>
            <MoonIcon /> 
            <SunIcon />
          </Hoverer>
        */}

        <Hoverer onClick={() => dispatch(OpenAuthentication())}>
          {authentication.Authenticated === true ? <AauthenticatedIcon /> :  <UnauthenticatedIcon /> }
        </Hoverer>
      </Operations>
    </Container>
  );
}
