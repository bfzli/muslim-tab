import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 18vh;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    z-index: 999;
`

export const Elements = styled.section`
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Linebreak = styled.section<{ themeColor?: string }>`
    width: 1px;
    height: 64px;
    background: ${(props) =>
        props.themeColor ? props.themeColor + '50' : '#e6e6e650'};
    margin: 0em 0.75em;
`

export const Breakspace = styled.section`
    margin: 0em 0.25em;
`
