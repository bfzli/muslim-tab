import styled from 'styled-components'

export const SearchContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem;
`

export const SearchForm = styled.form`
    width: 100%;
    position: relative;
`

export const SearchInput = styled.input<{ themeColor?: string }>`
    width: 100%;
    padding: 0.9rem 1.2rem 0.9rem 3rem;
    font-size: 0.95rem;
    font-weight: 300 !important;
    color: ${(props) => props.themeColor || 'white'};
    background: ${(props) =>
        props.themeColor
            ? props.themeColor + '20'
            : 'rgba(255, 255, 255, 0.12)'};
    backdrop-filter: blur(20px);
    border: 1px solid
        ${(props) =>
            props.themeColor
                ? props.themeColor + '60'
                : 'rgba(255, 255, 255, 0.25)'};
    border-radius: 50px;
    outline: none;
    transition: all 0.3s ease;
    font-family: inherit;

    &::placeholder {
        color: ${(props) =>
            props.themeColor
                ? props.themeColor + '99'
                : 'rgba(255, 255, 255, 0.6)'};
        font-weight: 300 !important;
    }

    &:focus {
        background: ${(props) =>
            props.themeColor
                ? props.themeColor + '30'
                : 'rgba(255, 255, 255, 0.18)'};
        border-color: ${(props) =>
            props.themeColor ? props.themeColor : 'rgba(255, 255, 255, 0.4)'};
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
`

export const GoogleIcon = styled.div<{ color: string }>`
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.color || 'white'};
    opacity: 1;
    z-index: 1;

    svg {
        display: block;
        width: 16px;
        height: 16px;
        color: ${(props) => props.color || 'white'};
        fill: currentColor;
    }
`

export const SearchIcon = styled.div<{ themeColor?: string }>`
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.themeColor || 'white'};

    svg {
        stroke: ${(props) => props.themeColor || 'white'};
    }
`
