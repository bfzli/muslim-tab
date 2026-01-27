import type { ContentMode } from '@types'

const ModeSwitcher = (
    mode: ContentMode,
    setMode: React.Dispatch<React.SetStateAction<ContentMode>>
): void => {
    switch (mode) {
        case 'verse':
            setMode('hadith')
            localStorage.setItem('view', 'hadith')
            break

        case 'hadith':
            setMode('quote')
            localStorage.setItem('view', 'quote')
            break

        case 'quote':
            setMode('auto')
            localStorage.setItem('view', 'auto')
            break

        case 'auto':
            setMode('verse')
            localStorage.setItem('view', 'verse')
            break

        default:
            setMode('verse')
            localStorage.setItem('view', 'verse')
            break
    }
}

export { ModeSwitcher }
