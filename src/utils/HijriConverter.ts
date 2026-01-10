export interface HijriDate {
    day: number
    month: number
    year: number
    monthName: string
}

const hijriMonths = [
    'Muharram',
    'Safar',
    'Rabi al-Awwal',
    'Rabi al-Thani',
    'Jumada al-Awwal',
    'Jumada al-Thani',
    'Rajab',
    'Shaban',
    'Ramadan',
    'Shawwal',
    'Dhul-Qadah',
    'Dhul-Hijjah'
]

export const convertToHijri = (date: Date): HijriDate => {
    // Using the Kuwaiti algorithm for Hijri conversion
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    let m = month
    let y = year

    if (m < 3) {
        y -= 1
        m += 12
    }

    const a = Math.floor(y / 100)
    const b = 2 - a + Math.floor(a / 4)
    const jd =
        Math.floor(365.25 * (y + 4716)) +
        Math.floor(30.6001 * (m + 1)) +
        day +
        b -
        1524.5

    const l = jd - 1948440 + 10632
    const n = Math.floor((l - 1) / 10631)
    const l2 = l - 10631 * n + 354
    const j =
        Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) +
        Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238)
    const l3 =
        l2 -
        Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
        Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
        29

    const hijriMonth = Math.floor((24 * l3) / 709)
    const hijriDay = l3 - Math.floor((709 * hijriMonth) / 24)
    const hijriYear = 30 * n + j - 30

    return {
        day: hijriDay,
        month: hijriMonth,
        year: hijriYear,
        monthName: hijriMonths[hijriMonth - 1]
    }
}
