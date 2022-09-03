import {
  CloseNotification,
  OpenNotification,
} from '../data/redux/NotificationSlice';

import { FetchContent } from './';

const UpdateContent = async (dispatch, props) => {
  const url = `http://localhost:4321/update`;

  var config = {
    method: 'POST',
    body: JSON.stringify({
      id: props.id,
      content: props.Content,
      arabic: props.Arabic,
      category: props.Category,
      language: props.Language,
      website: props.Website,
      reference: props.Reference,
      key: '9m1KA3rR92Md'
    }),
  };

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      FetchContent(dispatch);

      dispatch(
        OpenNotification({
          Title: 'Content added!',
          Message: 'The content was successfully added to the database.',
          Status: 'success',
        })
      );
    } else {
      dispatch(
        OpenNotification({
          Title: 'Content not added!',
          Message: 'Something went wrong while trying to add the content.',
          Status: 'error',
        })
      );
    }
  } catch (error) {
    dispatch(
      OpenNotification({
        Title: 'Content not added!',
        Message: 'Something went wrong while trying to add the content.',
        Status: 'error',
      })
    );
  } finally {
    setTimeout(() => dispatch(CloseNotification()), 3000);
  }
};

export default UpdateContent;
