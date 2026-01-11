import React from 'react'
import { Icon } from '@iconify/react'

export type ContentMode = 'verse' | 'hadith' | 'quote' | 'auto'

export interface ContentItem {
    content: string
    reference: string
}

export interface StyleProp {
    marginTop?: string
    marginBottom?: string
}

export interface BackgroundProps {
    background?: string
}

export interface IconProps {
    size?: string
    color?: string
}

export interface ModeProps {
    mode: ContentMode
    setMode: React.Dispatch<React.SetStateAction<ContentMode>>
}

export interface ContentProps {
    content: ContentItem | undefined
    setContent: React.Dispatch<React.SetStateAction<ContentItem | undefined>>
}

export interface WallpaperProps {
    wallpaper: number
    setWallpaper: React.Dispatch<React.SetStateAction<number>>
}

export interface HoverProps {
    setIsHover: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ModalProps {
    isModal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FooterProps
    extends ModeProps, ContentProps, WallpaperProps, HoverProps, ModalProps {
    bottom: StyleProp
}

export interface LogoProps extends HoverProps {
    top: StyleProp
    onSettingsClick: () => void
    isSettingsOpen: boolean
}

export type SearchProvider =
    | 'google'
    | 'duckduckgo'
    | 'bing'
    | 'brave'
    | 'yahoo'
    | 'chatgpt'
    | 'ecosia'
    | 'perplexity'

export interface SearchProviderConfig {
    name: string
    url: string
    icon: React.ReactNode
    color: string
    verb?: string
}

export const searchProviders: Record<SearchProvider, SearchProviderConfig> = {
    google: {
        name: 'Google',
        url: 'https://www.google.com/search?q=',
        icon: <Icon icon="simple-icons:google" width="16" height="16" />,
        color: '#4285F4'
    },
    duckduckgo: {
        name: 'DuckDuckGo',
        url: 'https://duckduckgo.com/?q=',
        icon: <Icon icon="simple-icons:duckduckgo" width="16" height="16" />,
        color: '#DE5833'
    },
    bing: {
        name: 'Bing',
        url: 'https://www.bing.com/search?q=',
        icon: <Icon icon="mdi:microsoft-bing" width="16" height="16" />,
        color: '#008373'
    },
    brave: {
        name: 'Brave',
        url: 'https://search.brave.com/search?q=',
        icon: <Icon icon="simple-icons:brave" width="16" height="16" />,
        color: '#FB542B'
    },
    yahoo: {
        name: 'Yahoo',
        url: 'https://search.yahoo.com/search?p=',
        icon: <Icon icon="simple-icons:yahoo" width="16" height="16" />,
        color: '#5F01D1'
    },
    chatgpt: {
        name: 'ChatGPT',
        url: 'https://chat.openai.com/?q=',
        icon: <Icon icon="simple-icons:openai" width="16" height="16" />,
        color: '#10A37F',
        verb: 'Ask'
    },
    ecosia: {
        name: 'Ecosia',
        url: 'https://www.ecosia.org/search?q=',
        icon: <Icon icon="simple-icons:ecosia" width="16" height="16" />,
        color: '#60B515'
    },
    perplexity: {
        name: 'Perplexity',
        url: 'https://www.perplexity.ai/search?q=',
        icon: <Icon icon="simple-icons:perplexity" width="16" height="16" />,
        color: '#20808D',
        verb: 'Ask'
    }
}

export type GradientType =
    | 'random'
    | 'ocean'
    | 'sunset'
    | 'forest'
    | 'lavender'
    | 'fire'
    | 'night'
    | 'rose'
    | 'sky'
    | 'cherry'
    | 'cotton'
    | 'peach'
    | 'purple'
    | 'mint'
    | 'autumn'
    | 'azure'
    | 'ember'
    | 'lime'
    | 'gold'
    | 'coral'
    | 'indigo'
    | 'emerald'
    | 'amber'
    | 'teal'
    | 'magenta'
    | 'sage'

export interface GradientConfig {
    name: string
    gradient: string
    themeColor: string
}

export const gradients: Record<GradientType, GradientConfig> = {
    random: {
        name: 'Random',
        gradient: 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #f5576c, #0ba360, #3cba92, #a8edea, #fed6e3)',
        themeColor: '#ffffff'
    },
    ocean: {
        name: 'Ocean',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        themeColor: '#a8b5ff'
    },
    sunset: {
        name: 'Sunset',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        themeColor: '#ffc4f0'
    },
    forest: {
        name: 'Forest',
        gradient: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
        themeColor: '#6ef5c8'
    },
    lavender: {
        name: 'Lavender',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        themeColor: '#fef0ff'
    },
    fire: {
        name: 'Fire',
        gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
        themeColor: '#ffd4a3'
    },
    night: {
        name: 'Night',
        gradient: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)',
        themeColor: '#ffffff'
    },
    rose: {
        name: 'Rose',
        gradient: 'linear-gradient(135deg, #e96443 0%, #904e95 100%)',
        themeColor: '#ffb8d1'
    },
    sky: {
        name: 'Sky',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        themeColor: '#d0f4ff'
    },
    cherry: {
        name: 'Cherry',
        gradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)',
        themeColor: '#ffc9c9'
    },
    cotton: {
        name: 'Cotton Candy',
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        themeColor: '#ffffff'
    },
    peach: {
        name: 'Peach',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        themeColor: '#fff5e8'
    },
    purple: {
        name: 'Purple Dream',
        gradient: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
        themeColor: '#f0abfc'
    },
    mint: {
        name: 'Mint',
        gradient: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)',
        themeColor: '#b3f0ff'
    },
    autumn: {
        name: 'Autumn',
        gradient: 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
        themeColor: '#fff0f5'
    },
    azure: {
        name: 'Azure',
        gradient: 'linear-gradient(135deg, #12c2e9 0%, #c471ed 0%, #f64f59 100%)',
        themeColor: '#e8f4ff'
    },
    ember: {
        name: 'Ember',
        gradient: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
        themeColor: '#ffd4d4'
    },
    lime: {
        name: 'Lime',
        gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
        themeColor: '#d4ff9f'
    },
    gold: {
        name: 'Gold',
        gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
        themeColor: '#ffed99'
    },
    coral: {
        name: 'Coral',
        gradient: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
        themeColor: '#ffd9c7'
    },
    indigo: {
        name: 'Indigo',
        gradient: 'linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)',
        themeColor: '#c7cfff'
    },
    emerald: {
        name: 'Emerald',
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        themeColor: '#9fffd4'
    },
    amber: {
        name: 'Amber',
        gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
        themeColor: '#ffe699'
    },
    teal: {
        name: 'Teal',
        gradient: 'linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)',
        themeColor: '#b3ffeb'
    },
    magenta: {
        name: 'Magenta',
        gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
        themeColor: '#ffb3d9'
    },
    sage: {
        name: 'Sage',
        gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
        themeColor: '#b3e6c7'
    }
}

export type FontFamily =
    | 'dm-sans'
    | 'inter'
    | 'poppins'
    | 'space-grotesk'
    | 'playfair-display'
    | 'manrope'
    | 'work-sans'
    | 'plus-jakarta-sans'
    | 'lora'
    | 'merriweather'
    | 'outfit'
    | 'sora'
    | 'lexend'
    | 'crimson-pro'
    | 'epilogue'
    | 'roboto'
    | 'montserrat'
    | 'open-sans'
    | 'raleway'
    | 'nunito'
    | 'bebas-neue'
    | 'archivo'
    | 'karla'
    | 'rubik'
    | 'ibm-plex-sans'
    | 'cormorant-garamond'
    | 'eb-garamond'
    | 'source-serif-pro'
    | 'spectral'
    | 'bitter'

export interface FontConfig {
    name: string
    family: string
    category: 'sans-serif' | 'serif' | 'display'
    googleFontName: string
    weights: string
}

export const fonts: Record<FontFamily, FontConfig> = {
    'dm-sans': {
        name: 'DM Sans',
        family: "'DM Sans', sans-serif",
        category: 'sans-serif',
        googleFontName: 'DM+Sans',
        weights: '300;400;500;600'
    },
    'inter': {
        name: 'Inter',
        family: "'Inter', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Inter',
        weights: '300;400;500;600'
    },
    'poppins': {
        name: 'Poppins',
        family: "'Poppins', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Poppins',
        weights: '300;400;500;600'
    },
    'space-grotesk': {
        name: 'Space Grotesk',
        family: "'Space Grotesk', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Space+Grotesk',
        weights: '300;400;500;600'
    },
    'playfair-display': {
        name: 'Playfair Display',
        family: "'Playfair Display', serif",
        category: 'serif',
        googleFontName: 'Playfair+Display',
        weights: '400;500;600'
    },
    'manrope': {
        name: 'Manrope',
        family: "'Manrope', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Manrope',
        weights: '300;400;500;600'
    },
    'work-sans': {
        name: 'Work Sans',
        family: "'Work Sans', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Work+Sans',
        weights: '300;400;500;600'
    },
    'plus-jakarta-sans': {
        name: 'Plus Jakarta Sans',
        family: "'Plus Jakarta Sans', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Plus+Jakarta+Sans',
        weights: '300;400;500;600'
    },
    'lora': {
        name: 'Lora',
        family: "'Lora', serif",
        category: 'serif',
        googleFontName: 'Lora',
        weights: '400;500;600'
    },
    'merriweather': {
        name: 'Merriweather',
        family: "'Merriweather', serif",
        category: 'serif',
        googleFontName: 'Merriweather',
        weights: '300;400;700'
    },
    'outfit': {
        name: 'Outfit',
        family: "'Outfit', sans-serif",
        category: 'display',
        googleFontName: 'Outfit',
        weights: '300;400;500;600'
    },
    'sora': {
        name: 'Sora',
        family: "'Sora', sans-serif",
        category: 'display',
        googleFontName: 'Sora',
        weights: '300;400;500;600'
    },
    'lexend': {
        name: 'Lexend',
        family: "'Lexend', sans-serif",
        category: 'display',
        googleFontName: 'Lexend',
        weights: '300;400;500;600'
    },
    'crimson-pro': {
        name: 'Crimson Pro',
        family: "'Crimson Pro', serif",
        category: 'serif',
        googleFontName: 'Crimson+Pro',
        weights: '400;500;600'
    },
    'epilogue': {
        name: 'Epilogue',
        family: "'Epilogue', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Epilogue',
        weights: '300;400;500;600'
    },
    'roboto': {
        name: 'Roboto',
        family: "'Roboto', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Roboto',
        weights: '300;400;500;700'
    },
    'montserrat': {
        name: 'Montserrat',
        family: "'Montserrat', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Montserrat',
        weights: '300;400;500;600;700'
    },
    'open-sans': {
        name: 'Open Sans',
        family: "'Open Sans', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Open+Sans',
        weights: '300;400;500;600'
    },
    'raleway': {
        name: 'Raleway',
        family: "'Raleway', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Raleway',
        weights: '300;400;500;600'
    },
    'nunito': {
        name: 'Nunito',
        family: "'Nunito', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Nunito',
        weights: '300;400;500;600'
    },
    'bebas-neue': {
        name: 'Bebas Neue',
        family: "'Bebas Neue', display",
        category: 'display',
        googleFontName: 'Bebas+Neue',
        weights: '400'
    },
    'archivo': {
        name: 'Archivo',
        family: "'Archivo', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Archivo',
        weights: '300;400;500;600'
    },
    'karla': {
        name: 'Karla',
        family: "'Karla', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Karla',
        weights: '300;400;500;600'
    },
    'rubik': {
        name: 'Rubik',
        family: "'Rubik', sans-serif",
        category: 'sans-serif',
        googleFontName: 'Rubik',
        weights: '300;400;500;600'
    },
    'ibm-plex-sans': {
        name: 'IBM Plex Sans',
        family: "'IBM Plex Sans', sans-serif",
        category: 'sans-serif',
        googleFontName: 'IBM+Plex+Sans',
        weights: '300;400;500;600'
    },
    'cormorant-garamond': {
        name: 'Cormorant Garamond',
        family: "'Cormorant Garamond', serif",
        category: 'serif',
        googleFontName: 'Cormorant+Garamond',
        weights: '300;400;500;600'
    },
    'eb-garamond': {
        name: 'EB Garamond',
        family: "'EB Garamond', serif",
        category: 'serif',
        googleFontName: 'EB+Garamond',
        weights: '400;500;600'
    },
    'source-serif-pro': {
        name: 'Source Serif Pro',
        family: "'Source Serif Pro', serif",
        category: 'serif',
        googleFontName: 'Source+Serif+Pro',
        weights: '300;400;600'
    },
    'spectral': {
        name: 'Spectral',
        family: "'Spectral', serif",
        category: 'serif',
        googleFontName: 'Spectral',
        weights: '300;400;500;600'
    },
    'bitter': {
        name: 'Bitter',
        family: "'Bitter', serif",
        category: 'serif',
        googleFontName: 'Bitter',
        weights: '300;400;500;600'
    }
}

const loadedFonts = new Set<FontFamily>()
loadedFonts.add('dm-sans')

export const loadFont = (fontKey: FontFamily): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (fontKey === 'dm-sans') {
            resolve()
            return
        }

        if (loadedFonts.has(fontKey)) {
            resolve()
            return
        }

        const font = fonts[fontKey]
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = `https://fonts.googleapis.com/css2?family=${font.googleFontName}:wght@${font.weights}&display=swap`

        link.onload = () => {
            loadedFonts.add(fontKey)
            resolve()
        }

        link.onerror = () => {
            reject(new Error(`Failed to load font: ${font.name}`))
        }

        document.head.appendChild(link)
    })
}
