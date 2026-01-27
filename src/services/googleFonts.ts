import type { FontConfig } from '@types'
import { fonts as localFonts } from '@types'

const popularGoogleFonts: Array<{
    name: string
    category: 'sans-serif' | 'serif' | 'display'
}> = [
    { name: 'Roboto', category: 'sans-serif' },
    { name: 'Open Sans', category: 'sans-serif' },
    { name: 'Noto Sans', category: 'sans-serif' },
    { name: 'Montserrat', category: 'sans-serif' },
    { name: 'Lato', category: 'sans-serif' },
    { name: 'Poppins', category: 'sans-serif' },
    { name: 'Roboto Condensed', category: 'sans-serif' },
    { name: 'Inter', category: 'sans-serif' },
    { name: 'Roboto Mono', category: 'sans-serif' },
    { name: 'Oswald', category: 'sans-serif' },
    { name: 'Raleway', category: 'sans-serif' },
    { name: 'Nunito', category: 'sans-serif' },
    { name: 'Nunito Sans', category: 'sans-serif' },
    { name: 'Ubuntu', category: 'sans-serif' },
    { name: 'Rubik', category: 'sans-serif' },
    { name: 'Playfair Display', category: 'serif' },
    { name: 'Merriweather', category: 'serif' },
    { name: 'PT Sans', category: 'sans-serif' },
    { name: 'Kanit', category: 'sans-serif' },
    { name: 'Lora', category: 'serif' },
    { name: 'Noto Serif', category: 'serif' },
    { name: 'Fira Sans', category: 'sans-serif' },
    { name: 'Work Sans', category: 'sans-serif' },
    { name: 'Quicksand', category: 'sans-serif' },
    { name: 'Mulish', category: 'sans-serif' },
    { name: 'Barlow', category: 'sans-serif' },
    { name: 'IBM Plex Sans', category: 'sans-serif' },
    { name: 'Heebo', category: 'sans-serif' },
    { name: 'Libre Franklin', category: 'sans-serif' },
    { name: 'Karla', category: 'sans-serif' },
    { name: 'Manrope', category: 'sans-serif' },
    { name: 'Josefin Sans', category: 'sans-serif' },
    { name: 'Arimo', category: 'sans-serif' },
    { name: 'Dosis', category: 'sans-serif' },
    { name: 'PT Serif', category: 'serif' },
    { name: 'Libre Baskerville', category: 'serif' },
    { name: 'Source Serif Pro', category: 'serif' },
    { name: 'Bitter', category: 'serif' },
    { name: 'Crimson Text', category: 'serif' },
    { name: 'EB Garamond', category: 'serif' },
    { name: 'Cormorant Garamond', category: 'serif' },
    { name: 'Spectral', category: 'serif' },
    { name: 'Crimson Pro', category: 'serif' },
    { name: 'Space Grotesk', category: 'sans-serif' },
    { name: 'Plus Jakarta Sans', category: 'sans-serif' },
    { name: 'Outfit', category: 'display' },
    { name: 'Sora', category: 'display' },
    { name: 'Lexend', category: 'display' },
    { name: 'Epilogue', category: 'sans-serif' },
    { name: 'Archivo', category: 'sans-serif' },
    { name: 'Red Hat Display', category: 'sans-serif' },
    { name: 'Urbanist', category: 'sans-serif' },
    { name: 'Figtree', category: 'sans-serif' },
    { name: 'Cabin', category: 'sans-serif' },
    { name: 'Barlow Condensed', category: 'sans-serif' },
    { name: 'Abel', category: 'sans-serif' },
    { name: 'Exo 2', category: 'sans-serif' },
    { name: 'Signika', category: 'sans-serif' },
    { name: 'Catamaran', category: 'sans-serif' },
    { name: 'Asap', category: 'sans-serif' },
    { name: 'Assistant', category: 'sans-serif' },
    { name: 'Overpass', category: 'sans-serif' },
    { name: 'Varela Round', category: 'sans-serif' },
    { name: 'Maven Pro', category: 'sans-serif' },
    { name: 'Chakra Petch', category: 'sans-serif' },
    { name: 'Public Sans', category: 'sans-serif' },
    { name: 'Questrial', category: 'sans-serif' },
    { name: 'Prompt', category: 'sans-serif' },
    { name: 'Didact Gothic', category: 'sans-serif' },
    { name: 'Mukta', category: 'sans-serif' },
    { name: 'Titillium Web', category: 'sans-serif' },
    { name: 'Source Sans Pro', category: 'sans-serif' },
    { name: 'Hind', category: 'sans-serif' },
    { name: 'Oxygen', category: 'sans-serif' },
    { name: 'Cairo', category: 'sans-serif' },
    { name: 'Russo One', category: 'display' },
    { name: 'Righteous', category: 'display' },
    { name: 'Bebas Neue', category: 'display' },
    { name: 'Comfortaa', category: 'display' },
    { name: 'Pacifico', category: 'display' },
    { name: 'Permanent Marker', category: 'display' },
    { name: 'Shadows Into Light', category: 'display' },
    { name: 'Indie Flower', category: 'display' },
    { name: 'Lobster', category: 'display' },
    { name: 'Abril Fatface', category: 'display' },
    { name: 'Alfa Slab One', category: 'display' },
    { name: 'Fredoka One', category: 'display' },
    { name: 'Staatliches', category: 'display' },
    { name: 'Concert One', category: 'display' },
    { name: 'Bangers', category: 'display' },
    { name: 'Passion One', category: 'display' },
    { name: 'Acme', category: 'display' },
    { name: 'Bungee', category: 'display' },
    { name: 'Anton', category: 'sans-serif' },
    { name: 'Teko', category: 'sans-serif' },
    { name: 'Fjalla One', category: 'sans-serif' },
    { name: 'Archivo Black', category: 'sans-serif' },
    { name: 'Yanone Kaffeesatz', category: 'sans-serif' },
    { name: 'Saira', category: 'sans-serif' },
    { name: 'Saira Condensed', category: 'sans-serif' }
]

const fontNameToKey = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-')
}

const buildPopularFonts = (): Record<string, FontConfig> => {
    const fonts: Record<string, FontConfig> = {}

    popularGoogleFonts.forEach((font) => {
        const key = fontNameToKey(font.name)

        fonts[key] = {
            name: font.name,
            family: `'${font.name}', ${font.category}`,
            category: font.category,
            googleFontName: font.name.replace(/\s+/g, '+'),
            weights: '300;400;500;600;700'
        }
    })

    return fonts
}

export const getAllFonts = (): Record<string, FontConfig> => {
    const result: Record<string, FontConfig> = {}
    const popularFonts = buildPopularFonts()

    result['dm-sans'] = localFonts['dm-sans']

    Object.entries(localFonts).forEach(([key, config]) => {
        if (key !== 'dm-sans') {
            result[key] = config
        }
    })

    Object.entries(popularFonts).forEach(([key, config]) => {
        if (!result[key]) {
            result[key] = config
        }
    })

    return result
}

const loadedFonts = new Set<string>()
loadedFonts.add('dm-sans')

export const loadGoogleFont = (
    fontKey: string,
    allFonts: Record<string, FontConfig>
): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (fontKey === 'dm-sans') {
            resolve()
            return
        }

        if (loadedFonts.has(fontKey)) {
            resolve()
            return
        }

        const font = allFonts[fontKey]
        if (!font) {
            reject(new Error(`Font not found: ${fontKey}`))
            return
        }

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
