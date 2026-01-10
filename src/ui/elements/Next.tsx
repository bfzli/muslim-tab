import { ContentProps, WallpaperProps, ContentMode } from '@types'
import React from 'react'
import { Element, Name } from '@styled/elements'
import NextIcon from '@icons/NextIcon'
import { getRandomNumber, ContentGenerator, preloadImage } from '@utils'

type NextProps = ContentProps & WallpaperProps & { mode: ContentMode }

const Next: React.FC<NextProps> = ({ mode, setContent, setWallpaper }) => {
    const next = async (): Promise<void> => {
        const newWallpaper = getRandomNumber()
        await preloadImage(newWallpaper)
        ContentGenerator(mode, setContent, false)
        setWallpaper(newWallpaper)
    }

    return (
        <Element onClick={next}>
            <NextIcon size='1em' />
            <Name>Next</Name>
        </Element>
    )
}

export default Next
