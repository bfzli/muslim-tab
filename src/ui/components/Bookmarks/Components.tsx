import styled from 'styled-components'

export const BookmarksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 64px);
    grid-template-rows: repeat(2, auto);
    justify-content: center;
    align-items: start;
    gap: 1.25rem 0.75rem;
    padding: 0.5rem 1rem 0;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
`

export const BookmarkItem = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    text-decoration: none;
    color: white;
    transition: transform 0.2s ease;
    cursor: pointer;
    width: 64px;
    flex-shrink: 0;

    &:hover {
        transform: translateY(-3px);
    }
`

export const BookmarkIcon = styled.div<{ themeColor?: string }>`
    width: 32px;
    height: 32px;
    background: ${(props) =>
        props.themeColor
            ? props.themeColor + '25'
            : 'rgba(255, 255, 255, 0.05)'};
    backdrop-filter: blur(10px);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border: 1px solid
        ${(props) =>
            props.themeColor
                ? props.themeColor + '60'
                : 'rgba(255, 255, 255, 0.05)'};
    overflow: hidden;

    img {
        width: 16px;
        height: 16px;
    }
`

export const BookmarkTitle = styled.p<{ themeColor?: string }>`
    font-size: 0.65rem;
    font-weight: 300 !important;
    max-width: 64px;
    text-align: center;
    color: ${(props) => props.themeColor || 'white'} !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0.95;
    display: block;
`
