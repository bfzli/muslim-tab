import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Loader, Content } from './ui/views';
import { SetContent } from './data/redux/Content';

export default function Application() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const language = useSelector((state) => state.language.value);
  const { i18n } = useTranslation();

  const changeLang = (lang) => i18n.changeLanguage(lang);

  useEffect(() => { if(content.status === false) dispatch(SetContent()) }, [])

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
