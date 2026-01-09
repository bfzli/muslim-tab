import { ContentProps, WallpaperProps } from '@types'
import React from 'react'
import { Element, Name } from '@styled/elements'
import NextIcon from '@icons/NextIcon'
import Quotes from '@data/Quotes.json'
import { RandomNumber } from '@utils'

type NextProps = ContentProps & WallpaperProps

const Next: React.FC<NextProps> = ({ setContent, setWallpaper }) => {
    const next = (): void => {
        const randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)]
        setContent(randomQuote || undefined)
        setWallpaper(RandomNumber)
    }

    return (
        <Element onClick={next}>
            <NextIcon size='1em' />
            <Name>Next</Name>
        </Element>
    )
}

export default Next
