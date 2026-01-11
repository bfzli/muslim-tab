import { ContentProps, WallpaperProps, ContentMode } from '@types'
import React from 'react'
import { Element, Name } from '@styled/elements'
import NextIcon from '@icons/NextIcon'
import { getRandomNumber, ContentGenerator, preloadImage } from '@utils'

type NextProps = ContentProps & WallpaperProps & { mode: ContentMode; wallpaper: number; themeColor?: string }

const Next: React.FC<NextProps> = ({ mode, content, setContent, wallpaper, setWallpaper, themeColor }) => {
    const next = async (): Promise<void> => {
        const newWallpaper = getRandomNumber(wallpaper)
        try {
            await preloadImage(newWallpaper)
        } catch (error) {
            console.warn('Failed to preload wallpaper:', error)
        }
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

export default Next
