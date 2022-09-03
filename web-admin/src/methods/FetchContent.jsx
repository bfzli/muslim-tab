import { SetContent } from '../data/redux/ContentSlice';
import { CloseNotification, OpenNotification } from '../data/redux/NotificationSlice';

const FetchContent = async (dispatch) => {
  const url = `http://localhost:4321/get`;

  var config = {
    method: 'POST',
    redirect: 'follow',
  };

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetContent(res.data.reverse()));
    else {
      dispatch(
        OpenNotification({
          Title: 'Ops, content not fetched!',
          Message: 'Something went wrong while trying to fetch the content.',
          Status: 'error',
        })
      );
    }
  } catch (error) {
    dispatch(
      OpenNotification({
        Title: 'Ops, content not fetched!',
        Message: 'Something went wrong while trying to fetch the content.',
        Status: 'error',
      })
    );
  } finally {
    setTimeout(() => dispatch(CloseNotification()), 3000);
  }
};

export default FetchContent;
