import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import {
    ModalContainer,
    ModalHeader,
    ModalHeaderSection,
    ModalBody,
    CloseButton,
    SettingItem,
    SettingLabel,
    SettingLabelRow,
    ResetButton,
    ToggleSwitch,
    ProviderSelector,
    ProviderButton,
    GradientButton,
    GradientSelector,
    FontSelectorWrapper,
    FontSelectorButton,
    FontDropdown,
    FontSearchWrapper,
    FontSearchInput,
    FontNotFound,
    FontOption,
    SettingsFooter,
    FooterLink,
    FooterLeft
} from '@styled/settings'
import { SearchProvider, searchProviders, GradientType, gradients, FontConfig } from '@types'
import { loadGoogleFont } from '../../../services/googleFonts'
import manifest from '../../../../public/manifest.json'

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
    selectedFont: string
    setSelectedFont: (value: string) => void
    allFonts: Record<string, FontConfig>
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
    setSelectedFont,
    allFonts
}) => {
    const [isClosing, setIsClosing] = useState(false)
    const [shouldRender, setShouldRender] = useState(isOpen)
    const [isFontDropdownOpen, setIsFontDropdownOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)
    const [fontSearch, setFontSearch] = useState('')
    const fontDropdownRef = useRef<HTMLDivElement>(null)
    const modalBodyRef = useRef<HTMLDivElement>(null)
    const modalContainerRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)

    const fontEntries = Object.entries(allFonts).filter(([, config]) =>
        config.name.toLowerCase().includes(fontSearch.toLowerCase())
    )

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
            document.addEventListener('click', handleClickOutside)
            return () => {
                document.removeEventListener('click', handleClickOutside)
            }
        }

        return undefined
    }, [isFontDropdownOpen])

    useEffect(() => {
        if (highlightedIndex >= 0 && fontDropdownRef.current) {
            const dropdown = fontDropdownRef.current.querySelector('[data-dropdown]')
            const highlightedOption = dropdown?.children[highlightedIndex] as HTMLElement
            if (highlightedOption && dropdown) {
                const dropdownEl = dropdown as HTMLElement
                const optionTop = highlightedOption.offsetTop
                const optionBottom = optionTop + highlightedOption.offsetHeight
                const scrollTop = dropdownEl.scrollTop
                const visibleBottom = scrollTop + dropdownEl.clientHeight

                if (optionTop < scrollTop) {
                    dropdownEl.scrollTop = optionTop
                } else if (optionBottom > visibleBottom) {
                    dropdownEl.scrollTop = optionBottom - dropdownEl.clientHeight
                }
            }
        }
    }, [highlightedIndex])

    useEffect(() => {
        if (isFontDropdownOpen && modalBodyRef.current) {
            // Wait for padding to be applied, then scroll to bottom
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const body = modalBodyRef.current
                    if (body) {
                        body.scrollTo({
                            top: body.scrollHeight,
                            behavior: 'smooth'
                        })
                    }
                    // Focus search input after scroll starts
                    setTimeout(() => {
                        searchInputRef.current?.focus()
                    }, 100)
                }, 50)
            })
        } else {
            // Clear search when dropdown closes
            setFontSearch('')
        }
    }, [isFontDropdownOpen])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalContainerRef.current && !modalContainerRef.current.contains(event.target as Node)) {
                setTimeout(() => onClose(), 0)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }

        return undefined
    }, [isOpen, onClose])

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

    const handleFontChange = (fontKey: string) => {
        loadGoogleFont(fontKey, allFonts).then(() => {
            setSelectedFont(fontKey)
            localStorage.setItem('selectedFont', fontKey)
        }).catch(console.error)
        setIsFontDropdownOpen(false)
        setHighlightedIndex(-1)
    }

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
                    handleFontChange(key)
                }
                break
            case 'Escape':
                e.preventDefault()
                setIsFontDropdownOpen(false)
                setHighlightedIndex(-1)
                break
        }
    }

    return createPortal(
        <ModalContainer
            isClosing={isClosing}
            ref={modalContainerRef}
            showPhotos={showPhotos}
        >
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
                <ModalBody ref={modalBodyRef}>
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
                        <SettingLabelRow>
                            <SettingLabel>Font Family</SettingLabel>
                            <ResetButton
                                hidden={selectedFont === 'dm-sans'}
                                onClick={() => {
                                    if (selectedFont !== 'dm-sans') {
                                        handleFontChange('dm-sans')
                                    }
                                }}
                            >
                                Reset
                            </ResetButton>
                        </SettingLabelRow>
                        <FontSelectorWrapper ref={fontDropdownRef}>
                            <FontSelectorButton
                                isOpen={isFontDropdownOpen}
                                onClick={() => setIsFontDropdownOpen(!isFontDropdownOpen)}
                                onKeyDown={handleKeyDown}
                            >
                                {allFonts[selectedFont]?.name || 'DM Sans'}
                            </FontSelectorButton>
                            <FontDropdown isOpen={isFontDropdownOpen} data-dropdown>
                                <FontSearchWrapper onClick={(e) => e.stopPropagation()}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                    <FontSearchInput
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder="Search fonts..."
                                        value={fontSearch}
                                        onChange={(e) => setFontSearch(e.target.value)}
                                    />
                                </FontSearchWrapper>
                                {fontEntries.length === 0 ? (
                                    <FontNotFound>
                                        No fonts found for "{fontSearch.length > 18 ? fontSearch.slice(0, 18) + '...' : fontSearch}"
                                    </FontNotFound>
                                ) : (
                                    fontEntries.map(([key, config], index) => (
                                        <FontOption
                                            key={key}
                                            selected={selectedFont === key || highlightedIndex === index}
                                            onClick={() => handleFontChange(key)}
                                            onMouseEnter={() => setHighlightedIndex(index)}
                                        >
                                            {config.name}
                                        </FontOption>
                                    ))
                                )}
                            </FontDropdown>
                        </FontSelectorWrapper>
                    </SettingItem>
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
                </ModalBody>
                <SettingsFooter>
                    <FooterLeft>
                        v{manifest.version} · Build by
                        <FooterLink href="https://bfzli.com" target="_blank" rel="noopener noreferrer">
                            Bfzli
                        </FooterLink>
                    </FooterLeft>
                    <FooterLink href="https://github.com/bfzli/muslim-tab" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </FooterLink>
                </SettingsFooter>
        </ModalContainer>,
        document.body
    )
}

export default Settings
