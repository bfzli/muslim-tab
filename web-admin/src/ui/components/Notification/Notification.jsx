import { Container } from './Components';
import { useSelector } from 'react-redux';
import { DislikeIcon, LikeIcon } from '../../icons';

export default function Notification() {
  const notification = useSelector((state) => state.Notification);

  if (notification.Visible)
    return (
      <Container status={notification.Status}>
        <div style={{display: 'flex'}}>
          {
            {
              "success": <LikeIcon />,
              "error": <DislikeIcon />,
            }[notification.Status]
          }
          <h1 style={{marginLeft: '.5em'}}>{notification.Title}</h1>
        </div>
        <p>{notification.Message}</p>
      </Container>
    );
}
