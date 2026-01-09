import { StyleProp } from '@types'

export const mt_30: StyleProp = { marginTop: '-30vh' }
export const mt_2: StyleProp = { marginTop: '-8vh' }
export const mb_30: StyleProp = { marginBottom: '-30em' }
export const mb_2: StyleProp = { marginBottom: '-2em' }

// Convert to function to avoid re-evaluation issues
export const getRandomNumber = (): number => Math.floor(Math.random() * 179) + 1

// Keep as constant for backward compatibility
export const RandomNumber: number = getRandomNumber()
