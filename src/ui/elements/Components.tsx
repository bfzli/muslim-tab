import styled from 'styled-components'

export const Element = styled.section<{ themeColor?: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1em;
    border-radius: 0.75em;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
    width: 75px;
    max-width: 75px;
    color: ${(props) => props.themeColor || '#fff'};

    svg {
        color: ${(props) => props.themeColor || '#fff'};
        stroke: ${(props) => props.themeColor || '#fff'};
    }

    &:hover {
        background: ${(props) => props.themeColor ? props.themeColor + '30' : '#383e4760'};
    }

    &:last-of-type {
        margin-right: 0em;
    }
`

export const Name = styled.p<{ themeColor?: string }>`
    font-size: 1em;
    text-align: center;
    font-weight: 400;
    margin-top: 0.75em;
    color: ${(props) => props.themeColor || '#fff'} !important;
    white-space: nowrap;
    opacity: 1;
    visibility: visible;
    display: block;
`
