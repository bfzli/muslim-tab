import { Button } from '..';
import { Container, Overlay, Clickable } from './Components';
import { useDispatch, useSelector } from 'react-redux';
import { CloseConfirmation } from '../../../data/redux/ConfirmationSlice';
import { DislikeIcon, LikeIcon } from '../../icons';

export default function Confirmation() {
  const dispatch = useDispatch();
  const confirmation = useSelector((state) => state.Confirmation);

  const handleConfirmation = () => {
    confirmation.OnConfirm();
    dispatch(CloseConfirmation());
  }

  if (confirmation.Visible) return (
      <Overlay>
        <Clickable onClick={() => dispatch(CloseConfirmation())} />

        <Container>
          <div style={{ display: 'flex' }}>
            {
              {
                success: <LikeIcon />,
                error: <DislikeIcon />,
              }[confirmation.Status]
            }
            <h1 style={{ marginLeft: '.5em' }}>{confirmation.Title}</h1>
          </div>
          <p>{confirmation.Message}</p>

          <Button onClick={() => dispatch(CloseConfirmation())} text='Cancel' />
          <Button onClick={() => handleConfirmation()} text='Confirm' />
        </Container>
      </Overlay>
    );
}
