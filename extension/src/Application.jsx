import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchContent } from './data/redux/Content';
import { useTranslation } from 'react-i18next';
import { Loader, Content } from './ui/views';

export default function Application() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const view = useSelector((state) => state.view.value);
  const language = useSelector((state) => state.language.value);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (view === undefined || language === undefined) {
      window.location.reload();
    }

    dispatch(
      FetchContent(
        { view, language }
      )
    );
  }, [view, language]);

  const changeLang = (lang) => i18n.changeLanguage(lang);

  useEffect(() => {
    switch (language) {
      case 'english':
        changeLang('en');
          break;
      default:
        changeLang('sq');
          break;
    }
  }, [language]);

  if (content.status === true) return <Content id='screen' />;
  else return <Loader stauts={content.status} />;
}
