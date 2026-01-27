import styled from 'styled-components'
import type { ContainerProps, TitleProps } from '@types'

export const Container = styled.section<ContainerProps>`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding-right: ${(props) => (props.isSettingsOpen ? '300px' : '0')};
    background: ${(props) =>
        props.showPhotos
            ? `url('${props.background}')`
            : props.gradient ||
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    transition: padding-right 0.3s ease-out;
    position: fixed;
    top: 0;
    left: 0;
`

export const ContentWrapper = styled.div<{
    themeColor?: string
    allElementsShown?: boolean
}>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${(props) =>
        props.allElementsShown ? 'flex-start' : 'center'};
    flex-direction: column;
    align-items: center;
    padding: ${(props) =>
        props.allElementsShown ? '15vh 15% 2.5em 15%' : '0em 15% 2.5em 15%'};
    background: ${(props) =>
        props.themeColor
            ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))`
            : 'rgba(0, 0, 0, 0.8)'};
    gap: 2.5rem;

    @media only screen and (max-height: 800px) {
        padding-top: ${(props) => (props.allElementsShown ? '10vh' : '0')};
    }

    @media only screen and (max-height: 600px) {
        padding-top: ${(props) => (props.allElementsShown ? '5vh' : '0')};
        gap: 1.5rem;
    }
`

export const QuoteContainer = styled.div<{ hasOtherElements?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${(props) => (props.hasOtherElements ? '2rem' : '0')};
    gap: 1rem;
`

export const Title = styled.h2<TitleProps>`
    width: ${(props) => (props.hasSettings ? '700px' : '100%')};
    font-size: ${(props) =>
        props.hasSettings ? '2rem' : props.compact ? '1.75em' : '2.75em'};
    font-weight: ${(props) => (props.hasSettings ? 400 : 500)};
    letter-spacing: 0.85px;
    text-align: center;
    color: ${(props) => props.themeColor || 'white'} !important;
    -webkit-text-stroke: 1px ${(props) => props.themeColor || 'white'};
    -webkit-text-fill-color: ${(props) => props.themeColor || 'white'};
    -webkit-animation: fill 0.5s infinite alternate;

    @media only screen and (max-width: 1000px) {
        font-size: ${(props) =>
            props.hasSettings ? '2rem' : props.compact ? '1.75em' : '2.75em'};
    }

    @media only screen and (max-width: 850px) {
        font-size: ${(props) =>
            props.hasSettings ? '1.75rem' : props.compact ? '1.5em' : '2.5em'};
    }

    @media only screen and (max-width: 600px) {
        font-size: ${(props) =>
            props.hasSettings
                ? '1.5rem'
                : props.compact
                  ? '1.5em'
                  : '2.25em'} !important;
    }
`

export const Text = styled.h2`
    width: 100%;
    height: 100%;
    font-size: 2.75em;
    font-weight: 500;
    letter-spacing: 0.85px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0em 15%;
    text-align: center;
    color: white !important;
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: white;
    -webkit-animation: fill 0.5s infinite alternate;
    background: rgba(0, 0, 0, 0.8);

    @media only screen and (max-width: 1000px) {
        font-size: 2.75em;
    }

    @media only screen and (max-width: 850px) {
        font-size: 2.5em;
    }

    @media only screen and (max-width: 600px) {
        font-size: 2.25em !important;
    }
`

export const Reference = styled.p<{ themeColor?: string }>`
    padding: 0.25rem 0.75rem;
    font-size: 0.9rem !important;
    font-weight: 300;
    border-radius: 99rem;
    transition: all ease-in-out 0.3s;
    z-index: 100;
    color: ${(props) =>
        props.themeColor ? props.themeColor + 'cc' : 'white'} !important;
    font-size: 0.8rem !important;
    -webkit-text-stroke: 0px ${(props) => props.themeColor || 'white'};
    -webkit-text-fill-color: ${(props) =>
        props.themeColor ? props.themeColor + 'cc' : 'white'};
    background: ${(props) =>
        props.themeColor ? props.themeColor + '15' : '#383e4720'};
    text-decoration: none;
    cursor: default;
`
