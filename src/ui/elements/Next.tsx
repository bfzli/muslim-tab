import type { NextProps } from '@types'
import React from 'react'
import { Element, Name } from '@styled/elements'
import { NextIcon } from '@icons'
import { getRandomNumber, ContentGenerator, preloadImage } from '@utils'

const Next: React.FC<NextProps> = ({
    mode,
    content,
    setContent,
    wallpaper,
    setWallpaper,
    themeColor
}) => {
    const next = async (): Promise<void> => {
        const newWallpaper = getRandomNumber(wallpaper)
        try {
            await preloadImage(newWallpaper)
        } catch (error) {}
        ContentGenerator(mode, setContent, false, content)
        setWallpaper(newWallpaper)
    }

    return (
        <Element onClick={next} themeColor={themeColor}>
            <NextIcon size='1em' />
            <Name themeColor={themeColor}>Next</Name>
        </Element>
    )
}

export { Next }
