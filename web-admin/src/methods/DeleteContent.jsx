import {
  CloseNotification,
  OpenNotification,
} from '../data/redux/NotificationSlice';

import { FetchContent } from '.';

const DeleteContent = async (dispatch, id) => {
  const url = `http://localhost:4321/delete`;

  var config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, key: '9m1KA3rR92Md' }),
  };

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      FetchContent(dispatch);

      dispatch(
        OpenNotification({
          Title: 'Content deleted!',
          Message: 'The content was successfully deleted from the database.',
          Status: 'success',
        })
      );
    } else {
      dispatch(
        OpenNotification({
          Title: 'Content not deleted!',
          Message: 'Something went wrong while trying to delete the content.',
          Status: 'error',
        })
      );
    }
  } catch (error) {
    dispatch(
      OpenNotification({
        Title: 'Content not deleted!',
        Message: 'Something went wrong while trying to delete the content.',
        Status: 'error',
      })
    );
  } finally {
    setTimeout(() => dispatch(CloseNotification()), 3000);
  }
};

export default DeleteContent;
