import { ContentItem, ContentMode, SearchProvider, GradientType, gradients } from '@types'
import React, { useEffect, useState } from 'react'
import { Container, ContentWrapper, QuoteContainer, Title, Reference } from '@styled/content'
import Footer from '@components/Footer'
import Logo from '@components/Logo'
import Bookmarks from '@components/Bookmarks'
import Settings from '@components/Settings'
import SearchBar from '@components/SearchBar'
import Clock from '@components/Clock'
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
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)
    const [showBookmarks, setShowBookmarks] = useState<boolean>(() => {
        const saved = localStorage.getItem('showBookmarks')
        return saved !== null ? JSON.parse(saved) : true
    })
    const [showSearch, setShowSearch] = useState<boolean>(() => {
        const saved = localStorage.getItem('showSearch')
        return saved !== null ? JSON.parse(saved) : true
    })
    const [searchProvider, setSearchProvider] = useState<SearchProvider>(() => {
        const saved = localStorage.getItem('searchProvider')
        return (saved as SearchProvider) || 'google'
    })
    const [showClock, setShowClock] = useState<boolean>(() => {
        const saved = localStorage.getItem('showClock')
        return saved !== null ? JSON.parse(saved) : true
    })
    const [showContent, setShowContent] = useState<boolean>(() => {
        const saved = localStorage.getItem('showContent')
        return saved !== null ? JSON.parse(saved) : true
    })
    const [showPhotos, setShowPhotos] = useState<boolean>(() => {
        const saved = localStorage.getItem('showPhotos')
        return saved !== null ? JSON.parse(saved) : true
    })
    const [selectedGradient, setSelectedGradient] = useState<GradientType>(() => {
        const saved = localStorage.getItem('selectedGradient')
        return (saved as GradientType) || 'ocean'
    })

    const top = isHover === false ? mt_30 : mt_2
    const bottom = isHover === false ? mb_30 : mb_2

    useEffect(() => {
        const loadContent = async () => {
            const newWallpaper = getRandomNumber(wallpaper)
            try {
                await preloadImage(newWallpaper)
            } catch (error) {
                console.warn('Failed to preload wallpaper:', error)
            }
            ContentGenerator(mode, setContent, false, content)
            setWallpaper(newWallpaper)
        }
        loadContent()
    }, [mode])

    const handleSettingsClick = () => {
        setIsSettingsOpen(true)
    }

    const handleSettingsClose = () => {
        setIsSettingsOpen(false)
    }

    return (
        <Container
            background={`/backgrounds/${wallpaper}.webp`}
            isSettingsOpen={isSettingsOpen}
            showPhotos={showPhotos}
            gradient={gradients[selectedGradient].gradient}
        >
            <Logo
                top={top}
                setIsHover={setIsHover}
                onSettingsClick={handleSettingsClick}
                isSettingsOpen={isSettingsOpen}
            />

            <ContentWrapper>
                {showClock && <Clock />}
                {showSearch && <SearchBar provider={searchProvider} />}
                {showBookmarks && <Bookmarks />}

                {showContent && (
                    <QuoteContainer hasOtherElements={showClock || showSearch || showBookmarks}>
                        <Title
                            compact={showClock && showSearch && showBookmarks}
                            hasSettings={showClock || showSearch || showBookmarks}
                        >
                            {content?.content}
                        </Title>

                        <Reference>
                            {content?.reference}
                        </Reference>
                    </QuoteContainer>
                )}
            </ContentWrapper>

            {showContent && (
                <Footer
                    mode={mode}
                    setMode={setMode}
                    content={content}
                    setContent={setContent}
                    wallpaper={wallpaper}
                    setWallpaper={setWallpaper}
                    bottom={bottom}
                    setIsHover={setIsHover}
                    isModal={isModal}
                    setModal={setIsModal}
                />
            )}

            <Settings
                isOpen={isSettingsOpen}
                onClose={handleSettingsClose}
                showClock={showClock}
                setShowClock={setShowClock}
                showBookmarks={showBookmarks}
                setShowBookmarks={setShowBookmarks}
                showSearch={showSearch}
                setShowSearch={setShowSearch}
                searchProvider={searchProvider}
                setSearchProvider={setSearchProvider}
                showContent={showContent}
                setShowContent={setShowContent}
                showPhotos={showPhotos}
                setShowPhotos={setShowPhotos}
                selectedGradient={selectedGradient}
                setSelectedGradient={setSelectedGradient}
            />
        </Container>
    )
}

export default Content
