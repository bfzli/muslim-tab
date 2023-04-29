import Quotes from "../data/Quotes.json";
import Hadiths from "../data/Hadiths.json";
import Verses from "../data/Verses.json";

const ContentGenerator = (mode, setContent, state = false) => {
  let SelectedContent = [];

  if (mode === "quote") SelectedContent = Quotes;
  if (mode === "hadith") SelectedContent = Hadiths;
  if (mode === "verse") SelectedContent = Verses;

  const SelectedQuote = SelectedContent[Math.floor(Math.random() * SelectedContent.length)];

  if(state === true) return SelectedQuote;
  else setContent(SelectedQuote);
};

export default ContentGenerator;
