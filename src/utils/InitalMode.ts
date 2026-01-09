import { ContentMode } from '@types'

const InitalMode = (): ContentMode => {
    const mode = localStorage.getItem('view')

    if (mode && (mode === 'verse' || mode === 'hadith' || mode === 'quote')) {
        return mode as ContentMode
    } else {
        localStorage.setItem('view', 'verse')
        return 'verse'
    }
}

export default InitalMode
