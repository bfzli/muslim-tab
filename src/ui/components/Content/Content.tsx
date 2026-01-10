import { ContentItem, ContentMode } from '@types'
import React, { useEffect, useState } from 'react'
import { Container, Text, Reference } from '@styled/content'
import Footer from '@components/Footer'
import Logo from '@components/Logo'
import {
    ContentGenerator,
    InitalMode,
    getRandomNumber,
    preloadImage,
    mb_2,
    mb_30,
    mt_2,
    mt_30
} from '@utils'

const Content: React.FC = () => {
    const [mode, setMode] = useState<ContentMode>(InitalMode())
    const [content, setContent] = useState<ContentItem | undefined>(
        ContentGenerator(mode, null, true)
    )
    const [wallpaper, setWallpaper] = useState<number>(getRandomNumber())
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isModal, setIsModal] = useState<boolean>(false)

    const top = isHover === false ? mt_30 : mt_2
    const bottom = isHover === false ? mb_30 : mb_2

    useEffect(() => {
        const loadContent = async () => {
            const newWallpaper = getRandomNumber()
            await preloadImage(newWallpaper)
            ContentGenerator(mode, setContent, false)
            setWallpaper(newWallpaper)
        }
        loadContent()
    }, [mode])

    return (
        <Container background={`/backgrounds/${wallpaper}.webp`}>
            <Logo top={top} setIsHover={setIsHover} />

            <Text>
                {content?.content}

                <Reference>{content?.reference}</Reference>
            </Text>

            <Footer
                mode={mode}
                setMode={setMode}
                content={content}
                setContent={setContent}
                setWallpaper={setWallpaper}
                bottom={bottom}
                setIsHover={setIsHover}
                isModal={isModal}
                setModal={setIsModal}
            />
        </Container>
    )
}

export default Content
