import { ContentMode, ContentItem } from '@types'
import Quotes from '@data/Quotes.json'
import Hadiths from '@data/Hadiths.json'
import Verses from '@data/Verses.json'

// Function overloads for different behaviors
function ContentGenerator(
    mode: ContentMode,
    setContent: null,
    state: true
): ContentItem

function ContentGenerator(
    mode: ContentMode,
    setContent: React.Dispatch<React.SetStateAction<ContentItem | undefined>>,
    state?: false
): void

function ContentGenerator(
    mode: ContentMode,
    setContent: React.Dispatch<
        React.SetStateAction<ContentItem | undefined>
    > | null,
    state = false
): ContentItem | void {
    let SelectedContent: ContentItem[] = []

    if (mode === 'auto') {
        // Combine all content and select randomly
        SelectedContent = [...Quotes, ...Hadiths, ...Verses]
    } else {
        if (mode === 'quote') SelectedContent = Quotes
        if (mode === 'hadith') SelectedContent = Hadiths
        if (mode === 'verse') SelectedContent = Verses
    }

    const SelectedQuote =
        SelectedContent[Math.floor(Math.random() * SelectedContent.length)]

    if (state === true) return SelectedQuote
    else if (setContent) setContent(SelectedQuote)
}

export default ContentGenerator
