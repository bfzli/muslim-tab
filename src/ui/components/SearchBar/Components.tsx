import styled from 'styled-components'

export const SearchContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 2rem auto 1rem;
    padding: 0 1rem;
`

export const SearchForm = styled.form`
    width: 100%;
    position: relative;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.9rem 1.2rem 0.9rem 3rem;
    font-size: 0.95rem;
    font-weight: 300 !important;
    color: white;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 50px;
    outline: none;
    transition: all 0.3s ease;
    font-family: inherit;

    &::placeholder {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 300 !important;
    }

    &:focus {
        background: rgba(255, 255, 255, 0.18);
        border-color: rgba(255, 255, 255, 0.4);
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
    color: white;
    opacity: 1;
    z-index: 1;

    svg {
        display: block;
        width: 16px;
        height: 16px;
        color: white;
        fill: currentColor;
    }
`

export const SearchIcon = styled.div`
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
`
