// Mode types
export type ContentMode = 'verse' | 'hadith' | 'quote' | 'auto'

// Content data structure
export interface ContentItem {
    content: string
    reference: string
}

// Style prop types
export interface StyleProp {
    marginTop?: string
    marginBottom?: string
}

// Styled components props
export interface BackgroundProps {
    background?: string
}

// Icon component props
export interface IconProps {
    size?: string
    color?: string
}

// Component prop types
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

// Combined Footer props
export interface FooterProps
    extends ModeProps, ContentProps, WallpaperProps, HoverProps, ModalProps {
    bottom: StyleProp
}

// Logo props
export interface LogoProps extends HoverProps {
    top: StyleProp
    onSettingsClick: () => void
    isSettingsOpen: boolean
}

// Re-export search provider types
export type { SearchProvider, SearchProviderConfig } from './searchProviders'
export { searchProviders } from './searchProviders'

// Re-export gradient types
export type { GradientType, GradientConfig } from './gradients'
export { gradients } from './gradients'

// Re-export font types
export type { FontFamily, FontConfig } from './fonts'
export { fonts, loadFont } from './fonts'
