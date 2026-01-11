import { ContentMode, ContentItem } from '@types'
import Quotes from '@data/Quotes.json'
import Hadiths from '@data/Hadiths.json'
import Verses from '@data/Verses.json'

function ContentGenerator(
    mode: ContentMode,
    setContent: null,
    state: true,
    previousContent?: ContentItem
): ContentItem

function ContentGenerator(
    mode: ContentMode,
    setContent: React.Dispatch<React.SetStateAction<ContentItem | undefined>>,
    state?: false,
    previousContent?: ContentItem
): void

function ContentGenerator(
    mode: ContentMode,
    setContent: React.Dispatch<
        React.SetStateAction<ContentItem | undefined>
    > | null,
    state = false,
    previousContent?: ContentItem
): ContentItem | void {
    let SelectedContent: ContentItem[] = []

    if (mode === 'auto') {
        SelectedContent = [...Quotes, ...Hadiths, ...Verses]
    } else {
        if (mode === 'quote') SelectedContent = Quotes
        if (mode === 'hadith') SelectedContent = Hadiths
        if (mode === 'verse') SelectedContent = Verses
    }

    if (SelectedContent.length === 1) {
        if (state === true) return SelectedContent[0]
        else if (setContent) setContent(SelectedContent[0])
        return
    }

    let SelectedQuote: ContentItem
    let attempts = 0
    const maxAttempts = 50

    do {
        SelectedQuote =
            SelectedContent[Math.floor(Math.random() * SelectedContent.length)]
        attempts++
    } while (
        previousContent &&
        SelectedQuote.content === previousContent.content &&
        SelectedQuote.reference === previousContent.reference &&
        attempts < maxAttempts
    )

    if (state === true) return SelectedQuote
    else if (setContent) setContent(SelectedQuote)
}

export default ContentGenerator
