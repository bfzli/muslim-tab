export interface HijriDate {
    day: number
    month: number
    year: number
    monthName: string
}

export const convertToHijri = (date: Date): HijriDate => {
    const nameFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const numericFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
        month: 'numeric'
    })

    const parts = nameFormatter.formatToParts(date)
    const numericParts = numericFormatter.formatToParts(date)

    const day = parseInt(parts.find(p => p.type === 'day')?.value || '1', 10)
    const month = parseInt(numericParts.find(p => p.type === 'month')?.value || '1', 10)
    const monthName = parts.find(p => p.type === 'month')?.value || ''
    const yearStr = parts.find(p => p.type === 'year')?.value || '1'
    const year = parseInt(yearStr.replace(/[^\d]/g, ''), 10)

    return {
        day,
        month,
        year,
        monthName
    }
}
