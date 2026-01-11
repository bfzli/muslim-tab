import { StyleProp } from '@types'

export const mt_30: StyleProp = { marginTop: '-30vh' }
export const mt_2: StyleProp = { marginTop: '-8vh' }
export const mb_30: StyleProp = { marginBottom: '-30em' }
export const mb_2: StyleProp = { marginBottom: '-2em' }

export const getRandomNumber = (exclude?: number): number => {
    let num: number
    do {
        num = Math.floor(Math.random() * 179) + 1
    } while (num === exclude && exclude !== undefined)
    return num
}

export const RandomNumber: number = getRandomNumber()
