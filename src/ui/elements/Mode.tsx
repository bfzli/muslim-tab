import { ModeProps, ContentMode } from '@types'
import React from 'react'
import { Element, Name } from '@styled/elements'
import HadithIcon from '@icons/HadithIcon'
import QuoteIcon from '@icons/QuoteIcon'
import VerseIcon from '@icons/VerseIcon'
import AutoIcon from '@icons/AutoIcon'
import { ModeSwitcher } from '@utils'

const modeLabels: Record<ContentMode, string> = {
    verse: 'Verses',
    hadith: 'Hadiths',
    quote: 'Quotes',
    auto: 'Random'
}

interface ModeExtendedProps extends ModeProps {
    themeColor?: string
}

const Mode: React.FC<ModeExtendedProps> = ({ mode, setMode, themeColor }) => {
    const action = (): void => {
        ModeSwitcher(mode, setMode)
    }

    const modeIcons: Record<ContentMode, React.ReactElement> = {
        verse: <VerseIcon size='1em' color={themeColor} />,
        hadith: <HadithIcon size='1em' color={themeColor} />,
        quote: <QuoteIcon size='1em' color={themeColor} />,
        auto: <AutoIcon size='1em' color={themeColor} />
    }

    return (
        <Element onClick={action} themeColor={themeColor}>
            {modeIcons[mode]}
            <Name themeColor={themeColor}>{modeLabels[mode]}</Name>
        </Element>
    )
}

export default Mode
