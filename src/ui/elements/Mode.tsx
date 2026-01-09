import { ModeProps, ContentMode } from '@types'
import React from 'react'
import { Element, Name } from '@styled/elements'
import HadithIcon from '@icons/HadithIcon'
import QuoteIcon from '@icons/QuoteIcon'
import VerseIcon from '@icons/VerseIcon'
import { ModeSwitcher } from '@utils'

const modeIcons: Record<ContentMode, React.ReactElement> = {
    verse: <VerseIcon size='1em' />,
    hadith: <HadithIcon size='1em' />,
    quote: <QuoteIcon size='1em' />
}

const modeLabels: Record<ContentMode, string> = {
    verse: 'Verses',
    hadith: 'Hadiths',
    quote: 'Quotes'
}

const Mode: React.FC<ModeProps> = ({ mode, setMode }) => {
    const action = (): void => {
        ModeSwitcher(mode, setMode)
    }

    return (
        <Element onClick={action}>
            {modeIcons[mode]}
            <Name>{modeLabels[mode]}</Name>
        </Element>
    )
}

export default Mode
