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

// Track which fonts have been loaded
const loadedFonts = new Set<FontFamily>()

// DM Sans is loaded locally, mark it as always available
loadedFonts.add('dm-sans')

export const loadFont = (fontKey: FontFamily): Promise<void> => {
    return new Promise((resolve, reject) => {
        // DM Sans is local, no need to load from Google
        if (fontKey === 'dm-sans') {
            resolve()
            return
        }

        // If already loaded, resolve immediately
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
            // Font failed to load, fallback to DM Sans will be handled by the caller
            reject(new Error(`Failed to load font: ${font.name}`))
        }

        document.head.appendChild(link)
    })
}
