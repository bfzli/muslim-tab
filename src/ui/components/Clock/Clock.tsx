import React, { useState, useEffect, useRef } from 'react'
import {
    ClockContainer,
    TimeDisplay,
    TimeDigit,
    TimeSeparator,
    DateDisplay,
    GregorianDate,
    HijriDate as HijriDateDisplay
} from '@styled/clock'
import { convertToHijri } from '@utils'
import type { TimeString, ClockProps } from '@types'

const Clock: React.FC<ClockProps> = ({ themeColor }) => {
    const [time, setTime] = useState<Date>(new Date())
    const [changedDigits, setChangedDigits] = useState<Set<string>>(new Set())
    const previousTimeRef = useRef<TimeString | null>(null)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const getTimeString = (date: Date): TimeString => {
        const hours = date.getHours()
        const isPM = hours >= 12
        const displayHours = hours % 12 || 12

        return {
            hours: displayHours.toString().padStart(2, '0'),
            minutes: date.getMinutes().toString().padStart(2, '0'),
            seconds: date.getSeconds().toString().padStart(2, '0'),
            period: isPM ? 'PM' : 'AM'
        }
    }

    const timeString = getTimeString(time)

    useEffect(() => {
        if (previousTimeRef.current) {
            const changed = new Set<string>()
            const prev = previousTimeRef.current

            if (timeString.hours[0] !== prev.hours[0]) {
                changed.add('h0')
            }
            if (timeString.hours[1] !== prev.hours[1]) {
                changed.add('h1')
            }

            if (timeString.minutes[0] !== prev.minutes[0]) {
                changed.add('m0')
            }
            if (timeString.minutes[1] !== prev.minutes[1]) {
                changed.add('m1')
            }

            if (timeString.seconds[0] !== prev.seconds[0]) {
                changed.add('s0')
            }
            if (timeString.seconds[1] !== prev.seconds[1]) {
                changed.add('s1')
            }

            if (timeString.period !== prev.period) {
                changed.add('period')
            }

            if (changed.size > 0) {
                setChangedDigits(changed)

                const timer = setTimeout(() => {
                    setChangedDigits(new Set())
                }, 400)

                previousTimeRef.current = timeString
                return () => clearTimeout(timer)
            }
        }
        previousTimeRef.current = timeString
        return undefined
    }, [
        timeString.hours,
        timeString.minutes,
        timeString.seconds,
        timeString.period
    ])

    const formatGregorianDate = (date: Date): string => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const formatHijriDate = (date: Date): string => {
        const hijri = convertToHijri(date)
        return `${hijri.day} ${hijri.monthName} ${hijri.year} AH`
    }

    return (
        <ClockContainer>
            <TimeDisplay themeColor={themeColor}>
                <TimeDigit isChanging={changedDigits.has('h0')}>
                    {timeString.hours[0]}
                </TimeDigit>
                <TimeDigit isChanging={changedDigits.has('h1')}>
                    {timeString.hours[1]}
                </TimeDigit>
                <TimeSeparator>:</TimeSeparator>
                <TimeDigit isChanging={changedDigits.has('m0')}>
                    {timeString.minutes[0]}
                </TimeDigit>
                <TimeDigit isChanging={changedDigits.has('m1')}>
                    {timeString.minutes[1]}
                </TimeDigit>
                <TimeSeparator style={{ opacity: 0.5 }}>:</TimeSeparator>
                <TimeDigit isChanging={changedDigits.has('s0')} isSeconds>
                    {timeString.seconds[0]}
                </TimeDigit>
                <TimeDigit isChanging={changedDigits.has('s1')} isSeconds>
                    {timeString.seconds[1]}
                </TimeDigit>
                <TimeSeparator
                    style={{ marginLeft: '0.3rem', fontSize: '0.5em' }}
                >
                    <TimeDigit isChanging={changedDigits.has('period')}>
                        {timeString.period}
                    </TimeDigit>
                </TimeSeparator>
            </TimeDisplay>
            <DateDisplay>
                <GregorianDate themeColor={themeColor}>
                    {formatGregorianDate(time)}
                </GregorianDate>
                <HijriDateDisplay themeColor={themeColor}>
                    {formatHijriDate(time)}
                </HijriDateDisplay>
            </DateDisplay>
        </ClockContainer>
    )
}

export { Clock }
