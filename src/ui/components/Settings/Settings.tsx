import React, { useState, useEffect } from 'react'
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
    GradientButton
} from './Components'
import { SearchProvider, searchProviders, GradientType, gradients } from '@types'

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
    setSelectedGradient
}) => {
    const [isClosing, setIsClosing] = useState(false)
    const [shouldRender, setShouldRender] = useState(isOpen)

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
                            <ProviderSelector>
                                {Object.entries(gradients).map(([key, config]) => (
                                    <GradientButton
                                        key={key}
                                        gradient={config.gradient}
                                        selected={selectedGradient === key}
                                        onClick={() =>
                                            handleGradientChange(key as GradientType)
                                        }
                                        title={config.name}
                                    />
                                ))}
                            </ProviderSelector>
                        </SettingItem>
                    )}
                </ModalBody>
            </ModalContainer>
        </ModalBackdrop>
    )
}

export default Settings
