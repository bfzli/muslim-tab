import { ContentMode } from '@types'

const ModeSwitcher = (
    mode: ContentMode,
    setMode: React.Dispatch<React.SetStateAction<ContentMode>>
): void => {
    switch (mode) {
        case 'hadith':
            setMode('quote')
            localStorage.setItem('view', 'quote')
            break

        case 'quote':
            setMode('verse')
            localStorage.setItem('view', 'verse')
            break

        default:
            setMode('hadith')
            localStorage.setItem('view', 'hadith')
            break
    }
}

export default ModeSwitcher
