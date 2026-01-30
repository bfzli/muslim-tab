import type {
    ContentItem,
    ContentMode,
    SearchProvider,
    GradientType,
    FontConfig
} from '@types'
import { gradients, fonts } from '@types'
import React, { useEffect, useState } from 'react'
import { getAllFonts, loadGoogleFont } from '@services'
import {
    Container,
    ContentWrapper,
    QuoteContainer,
    Title,
    Reference
} from '@styled/content'
import { Footer } from '@components/Footer'
import { Logo } from '@components/Logo'
import { Bookmarks } from '@components/Bookmarks'
import { Settings } from '@components/Settings'
import { SearchBar } from '@components/SearchBar'
import { Clock } from '@components/Clock'
import {
    ContentGenerator,
    InitalMode,
    getRandomNumber,
    preloadImage,
    getDefaultSearchProvider,
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
        return (saved as SearchProvider) || getDefaultSearchProvider()
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
    const [selectedGradient, setSelectedGradient] = useState<GradientType>(
        () => {
            const saved = localStorage.getItem('selectedGradient')
            return (saved as GradientType) || 'ocean'
        }
    )

    const [actualGradient, setActualGradient] = useState<GradientType>(() => {
        const saved = localStorage.getItem('selectedGradient') as GradientType
        if (saved === 'random') {
            const gradientKeys = Object.keys(gradients).filter(
                (key) => key !== 'random'
            ) as GradientType[]
            return gradientKeys[Math.floor(Math.random() * gradientKeys.length)]
        }
        return saved || 'ocean'
    })

    const [selectedFont, setSelectedFont] = useState<string>(() => {
        const saved = localStorage.getItem('selectedFont')
        return saved || 'dm-sans'
    })

    const [allFonts] = useState<Record<string, FontConfig>>(() => getAllFonts())

    const top = isHover === false ? mt_30 : mt_2
    const bottom = isHover === false ? mb_30 : mb_2

    useEffect(() => {
        const loadContent = async () => {
            const newWallpaper = getRandomNumber(wallpaper)
            try {
                await preloadImage(newWallpaper)
            } catch (error) {}
            ContentGenerator(mode, setContent, false, content)
            setWallpaper(newWallpaper)
        }
        loadContent()
    }, [mode])

    useEffect(() => {
        if (selectedGradient === 'random') {
            const gradientKeys = Object.keys(gradients).filter(
                (key) => key !== 'random' && key !== actualGradient
            ) as GradientType[]
            const randomGradient =
                gradientKeys[Math.floor(Math.random() * gradientKeys.length)]
            setActualGradient(randomGradient)
        } else {
            setActualGradient(selectedGradient)
        }
    }, [selectedGradient])

    useEffect(() => {
        if (selectedGradient === 'random') {
            const gradientKeys = Object.keys(gradients).filter(
                (key) => key !== 'random' && key !== actualGradient
            ) as GradientType[]
            const randomGradient =
                gradientKeys[Math.floor(Math.random() * gradientKeys.length)]
            setActualGradient(randomGradient)
        }
    }, [wallpaper, selectedGradient])

    useEffect(() => {
        const applyFont = async () => {
            try {
                await loadGoogleFont(selectedFont, allFonts)

                const fontConfig = allFonts[selectedFont]
                if (selectedFont !== 'dm-sans' && fontConfig) {
                    await document.fonts.load(`400 16px "${fontConfig.name}"`)
                    await document.fonts.ready
                }

                const family = fontConfig?.family || fonts['dm-sans'].family
                document.body.style.setProperty(
                    'font-family',
                    family,
                    'important'
                )
            } catch (error) {
                document.body.style.setProperty(
                    'font-family',
                    fonts['dm-sans'].family,
                    'important'
                )
            }
        }
        applyFont()
    }, [selectedFont, allFonts])

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
            gradient={gradients[actualGradient].gradient}
        >
            <Logo
                top={top}
                setIsHover={setIsHover}
                onSettingsClick={handleSettingsClick}
                isSettingsOpen={isSettingsOpen}
                themeColor={
                    !showPhotos
                        ? gradients[actualGradient].themeColor
                        : undefined
                }
            />

            <ContentWrapper
                themeColor={
                    !showPhotos
                        ? gradients[actualGradient].themeColor
                        : undefined
                }
                allElementsShown={showClock && showSearch && showContent}
            >
                {showClock && (
                    <Clock
                        themeColor={
                            !showPhotos
                                ? gradients[actualGradient].themeColor
                                : undefined
                        }
                    />
                )}
                {showSearch && (
                    <SearchBar
                        provider={searchProvider}
                        themeColor={
                            !showPhotos
                                ? gradients[actualGradient].themeColor
                                : undefined
                        }
                    />
                )}
                {showBookmarks && (
                    <Bookmarks
                        themeColor={
                            !showPhotos
                                ? gradients[actualGradient].themeColor
                                : undefined
                        }
                    />
                )}

                {showContent && (
                    <QuoteContainer
                        hasOtherElements={
                            showClock || showSearch || showBookmarks
                        }
                    >
                        <Title
                            compact={showClock && showSearch && showBookmarks}
                            hasSettings={
                                showClock || showSearch || showBookmarks
                            }
                            themeColor={
                                !showPhotos
                                    ? gradients[actualGradient].themeColor
                                    : undefined
                            }
                        >
                            {content?.content}
                        </Title>

                        <Reference
                            themeColor={
                                !showPhotos
                                    ? gradients[actualGradient].themeColor
                                    : undefined
                            }
                        >
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
                    themeColor={
                        !showPhotos
                            ? gradients[actualGradient].themeColor
                            : undefined
                    }
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
                selectedFont={selectedFont}
                setSelectedFont={setSelectedFont}
                allFonts={allFonts}
            />
        </Container>
    )
}

export { Content }
