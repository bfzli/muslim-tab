import { StyleProp } from '@types'

export const mt_30: StyleProp = { marginTop: '-30vh' }
export const mt_2: StyleProp = { marginTop: '-8vh' }
export const mb_30: StyleProp = { marginBottom: '-30em' }
export const mb_2: StyleProp = { marginBottom: '-2em' }

// Convert to function to avoid re-evaluation issues
// Now supports excluding a number to avoid repetition
export const getRandomNumber = (exclude?: number): number => {
    let num: number
    do {
        num = Math.floor(Math.random() * 179) + 1
    } while (num === exclude && exclude !== undefined)
    return num
}

// Keep as constant for backward compatibility
export const RandomNumber: number = getRandomNumber()
