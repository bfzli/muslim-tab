import type { SearchProvider } from '@types'

export const getDefaultSearchProvider = (): SearchProvider => {
    const ua = navigator.userAgent.toLowerCase()

    if (ua.includes('brave')) {
        return 'brave'
    }

    if (ua.includes('duckduckgo')) {
        return 'duckduckgo'
    }

    if (ua.includes('ecosia')) {
        return 'ecosia'
    }

    return 'google'
}
