import React, { useState, useEffect, useRef } from 'react'
import {
    ModalBackdrop,
    ModalContainer,
    ModalHeader,
    ModalHeaderSection,
    ModalBody,
    CloseButton,
    SettingItem,
    SettingLabel,
    ToggleSwitch,
    ProviderSelector,
    ProviderButton,
    GradientButton,
    GradientSelector,
    FontSelectorWrapper,
    FontSelectorButton,
    FontDropdown,
    FontOption
} from './Components'
import { SearchProvider, searchProviders, GradientType, gradients, FontFamily, fonts } from '@types'

interface SettingsProps {
    isOpen: boolean
    onClose: () => void
    showClock: boolean
    setShowClock: (value: boolean) => void
    showBookmarks: boolean
    setShowBookmarks: (value: boolean) => void
    showSearch: boolean
    setShowSearch: (value: boolean) => void
    searchProvider: SearchProvider
    setSearchProvider: (value: SearchProvider) => void
    showContent: boolean
    setShowContent: (value: boolean) => void
    showPhotos: boolean
    setShowPhotos: (value: boolean) => void
    selectedGradient: GradientType
    setSelectedGradient: (value: GradientType) => void
    selectedFont: FontFamily
    setSelectedFont: (value: FontFamily) => void
}

const Settings: React.FC<SettingsProps> = ({
    isOpen,
    onClose,
    showClock,
    setShowClock,
    showBookmarks,
    setShowBookmarks,
    showSearch,
    setShowSearch,
    searchProvider,
    setSearchProvider,
    showContent,
    setShowContent,
    showPhotos,
    setShowPhotos,
    selectedGradient,
    setSelectedGradient,
    selectedFont,
    setSelectedFont
}) => {
    const [isClosing, setIsClosing] = useState(false)
    const [shouldRender, setShouldRender] = useState(isOpen)
    const [isFontDropdownOpen, setIsFontDropdownOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)
    const fontDropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true)
            setIsClosing(false)
        } else if (shouldRender) {
            setIsClosing(true)
            const timer = setTimeout(() => {
                setShouldRender(false)
                setIsClosing(false)
            }, 300) // Match animation duration
            return () => clearTimeout(timer)
        }
        return undefined
    }, [isOpen, shouldRender])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (fontDropdownRef.current && !fontDropdownRef.current.contains(event.target as Node)) {
                setIsFontDropdownOpen(false)
            }
        }

        if (isFontDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }

        return undefined
    }, [isFontDropdownOpen])

    useEffect(() => {
        if (highlightedIndex >= 0 && fontDropdownRef.current) {
            const dropdown = fontDropdownRef.current.querySelector('[data-dropdown]')
            const highlightedOption = dropdown?.children[highlightedIndex] as HTMLElement
            if (highlightedOption) {
                highlightedOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
            }
        }
    }, [highlightedIndex])

    if (!shouldRender) return null

    const handleClockToggle = () => {
        const newValue = !showClock
        setShowClock(newValue)
        localStorage.setItem('showClock', JSON.stringify(newValue))
    }

    const handleBookmarksToggle = () => {
        const newValue = !showBookmarks
        setShowBookmarks(newValue)
        localStorage.setItem('showBookmarks', JSON.stringify(newValue))
    }

    const handleSearchToggle = () => {
        const newValue = !showSearch
        setShowSearch(newValue)
        localStorage.setItem('showSearch', JSON.stringify(newValue))
    }

    const handleProviderChange = (provider: SearchProvider) => {
        setSearchProvider(provider)
        localStorage.setItem('searchProvider', provider)
    }

    const handleContentToggle = () => {
        const newValue = !showContent
        setShowContent(newValue)
        localStorage.setItem('showContent', JSON.stringify(newValue))
    }

    const handlePhotosToggle = () => {
        const newValue = !showPhotos
        setShowPhotos(newValue)
        localStorage.setItem('showPhotos', JSON.stringify(newValue))
    }

    const handleGradientChange = (gradient: GradientType) => {
        setSelectedGradient(gradient)
        localStorage.setItem('selectedGradient', gradient)
    }

    const handleFontChange = (font: FontFamily) => {
        setSelectedFont(font)
        localStorage.setItem('selectedFont', font)
        setIsFontDropdownOpen(false)
        setHighlightedIndex(-1)
    }

    const fontEntries = Object.entries(fonts)

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isFontDropdownOpen) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault()
                setIsFontDropdownOpen(true)
                setHighlightedIndex(0)
            }
            return
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setHighlightedIndex((prev) =>
                    prev < fontEntries.length - 1 ? prev + 1 : prev
                )
                break
            case 'ArrowUp':
                e.preventDefault()
                setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0))
                break
            case 'Enter':
                e.preventDefault()
                if (highlightedIndex >= 0) {
                    const [key] = fontEntries[highlightedIndex]
                    handleFontChange(key as FontFamily)
                }
                break
            case 'Escape':
                e.preventDefault()
                setIsFontDropdownOpen(false)
                setHighlightedIndex(-1)
                break
        }
    }

    return (
        <ModalBackdrop>
            <ModalContainer isClosing={isClosing}>
                <ModalHeaderSection>
                    <ModalHeader>Settings</ModalHeader>
                    <CloseButton onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </CloseButton>
                </ModalHeaderSection>
                <ModalBody>
                    <SettingItem>
                        <SettingLabel htmlFor="clock-toggle">
                            Show Clock
                        </SettingLabel>
                        <ToggleSwitch
                            checked={showClock}
                            onClick={handleClockToggle}
                            id="clock-toggle"
                        />
                    </SettingItem>
                    <SettingItem>
                        <SettingLabel htmlFor="search-toggle">
                            Show Search Bar
                        </SettingLabel>
                        <ToggleSwitch
                            checked={showSearch}
                            onClick={handleSearchToggle}
                            id="search-toggle"
                        />
                    </SettingItem>
                    {showSearch && (
                        <SettingItem style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <SettingLabel>Search Provider</SettingLabel>
                            <ProviderSelector>
                                {Object.entries(searchProviders).map(([key, config]) => (
                                    <ProviderButton
                                        key={key}
                                        selected={searchProvider === key}
                                        color={config.color}
                                        onClick={() =>
                                            handleProviderChange(key as SearchProvider)
                                        }
                                    >
                                        {config.icon}
                                        {config.name}
                                    </ProviderButton>
                                ))}
                            </ProviderSelector>
                        </SettingItem>
                    )}
                    <SettingItem>
                        <SettingLabel htmlFor="bookmarks-toggle">
                            Show Bookmarks
                        </SettingLabel>
                        <ToggleSwitch
                            checked={showBookmarks}
                            onClick={handleBookmarksToggle}
                            id="bookmarks-toggle"
                        />
                    </SettingItem>
                    <SettingItem>
                        <SettingLabel htmlFor="content-toggle">
                            Show Content
                        </SettingLabel>
                        <ToggleSwitch
                            checked={showContent}
                            onClick={handleContentToggle}
                            id="content-toggle"
                        />
                    </SettingItem>
                    <SettingItem>
                        <SettingLabel htmlFor="photos-toggle">
                            Show Photos
                        </SettingLabel>
                        <ToggleSwitch
                            checked={showPhotos}
                            onClick={handlePhotosToggle}
                            id="photos-toggle"
                        />
                    </SettingItem>
                    {!showPhotos && (
                        <SettingItem style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <SettingLabel>Background Gradient</SettingLabel>
                            <GradientSelector>
                                {Object.entries(gradients).map(([key, config]) => (
                                    <GradientButton
                                        key={key}
                                        gradient={config.gradient}
                                        selected={selectedGradient === key}
                                        onClick={() =>
                                            handleGradientChange(key as GradientType)
                                        }
                                        title={config.name}
                                        isRandom={key === 'random'}
                                    >
                                        {key === 'random' && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                                                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                                                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                            </svg>
                                        )}
                                    </GradientButton>
                                ))}
                            </GradientSelector>
                        </SettingItem>
                    )}
                    <SettingItem style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <SettingLabel>Font Family</SettingLabel>
                        <FontSelectorWrapper ref={fontDropdownRef}>
                            <FontSelectorButton
                                isOpen={isFontDropdownOpen}
                                onClick={() => setIsFontDropdownOpen(!isFontDropdownOpen)}
                                onKeyDown={handleKeyDown}
                            >
                                {fonts[selectedFont].name}
                            </FontSelectorButton>
                            <FontDropdown isOpen={isFontDropdownOpen} data-dropdown>
                                {fontEntries.map(([key, config], index) => (
                                    <FontOption
                                        key={key}
                                        selected={selectedFont === key || highlightedIndex === index}
                                        onClick={() => handleFontChange(key as FontFamily)}
                                        onMouseEnter={() => setHighlightedIndex(index)}
                                    >
                                        {config.name}
                                    </FontOption>
                                ))}
                            </FontDropdown>
                        </FontSelectorWrapper>
                    </SettingItem>
                </ModalBody>
            </ModalContainer>
        </ModalBackdrop>
    )
}

export default Settings
