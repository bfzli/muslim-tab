import styled, { keyframes } from 'styled-components'

const flipIn = keyframes`
    0% {
        transform: rotateX(90deg);
        opacity: 0;
    }
    100% {
        transform: rotateX(0deg);
        opacity: 1;
    }
`

const flipInSeconds = keyframes`
    0% {
        transform: rotateX(90deg);
        opacity: 0;
    }
    100% {
        transform: rotateX(0deg);
        opacity: 0.5;
    }
`

export const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    perspective: 1000px;
    gap: 0.5rem;
`

export const TimeDisplay = styled.div<{ themeColor?: string }>`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 4rem;
    font-weight: 300;
    color: ${(props) => props.themeColor || 'white'};
    letter-spacing: 0.5px;
`

export const TimeDigit = styled.span<{ isChanging: boolean; isSeconds?: boolean }>`
    display: inline-block;
    min-width: 0.6em;
    text-align: center;
    animation: ${(props) =>
        props.isChanging
            ? props.isSeconds
                ? flipInSeconds
                : flipIn
            : 'none'}
        0.4s ease-out;
    transform-origin: center;
    opacity: ${(props) => (props.isSeconds ? 0.5 : 1)};
`

export const TimeSeparator = styled.span`
    display: inline-block;
    opacity: 0.8;
`

export const DateDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
`

export const GregorianDate = styled.div<{ themeColor?: string }>`
    font-size: 1rem;
    font-weight: 300;
    color: ${(props) => (props.themeColor ? props.themeColor + 'dd' : 'rgba(255, 255, 255, 0.8)')};
`

export const HijriDate = styled.div<{ themeColor?: string }>`
    font-size: 0.9rem;
    font-weight: 300;
    color: ${(props) => (props.themeColor ? props.themeColor + '99' : 'rgba(255, 255, 255, 0.6)')};
`
