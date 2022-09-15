import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loader, Content } from './ui/views';
import { SetContent } from './data/redux/Content';
import { languageLoader } from './data/redux/Language';
import { viewLoader } from './data/redux/View';

export default function Application() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const language = useSelector((state) => state.language);
  const view = useSelector((state) => state.view);

  useEffect(() => {
    if(language.status === false) dispatch(languageLoader());
    if(view.status === false) dispatch(viewLoader());
    if(language.status && view.status) dispatch(SetContent());
  }, [language, view]);

  const isLoaded = content.status === true && language.status === true && view.status === true;

  if (isLoaded) return <Content id='screen' />;
  else return <Loader stauts={content.status} />;
}
