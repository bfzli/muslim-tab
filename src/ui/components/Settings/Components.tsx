import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
`

export const ModalBackdrop = styled.div<{ isClosing?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    z-index: 9999;
    pointer-events: none;
`

export const ModalContainer = styled.div<{ isClosing?: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    background: rgb(25, 25, 25);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    width: 300px;
    height: 100vh;
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.5);
    overflow-y: auto;
    animation: ${(props) => (props.isClosing ? slideOut : slideIn)} 0.3s ease-out;
    display: flex;
    flex-direction: column;
    pointer-events: auto;
`

export const ModalHeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.65rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    flex-shrink: 0;
`

export const ModalHeader = styled.h2`
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
`

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    svg {
        width: 18px;
        height: 18px;
    }

    &:hover {
        color: white;
    }
`

export const ModalBody = styled.div`
    padding: 0.25rem 1rem;
    flex: 1;
    overflow-y: auto;
`

export const SettingItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;

    &:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    }
`

export const SettingLabel = styled.label`
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    font-weight: 300;
    cursor: pointer;
`

export const ProviderSelector = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`

export const GradientSelector = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 32px);
    gap: 0.45rem;
`

export const ProviderButton = styled.button<{ selected: boolean; color: string }>`
    background: ${(props) =>
        props.selected ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)'};
    color: ${(props) => (props.selected ? 'white' : 'rgba(255, 255, 255, 0.7)')};
    border: 1px solid
        ${(props) =>
            props.selected ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)'};
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
    font-weight: 300;
    cursor: ${(props) => (props.selected ? 'default' : 'pointer')};
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: all 0.2s ease;
    font-family: inherit;

    &:hover {
        background: ${(props) =>
            props.selected ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)'};
        border-color: ${(props) =>
            props.selected ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)'};
        color: white;
    }

    svg {
        flex-shrink: 0;
    }
`

export const ToggleSwitch = styled.div<{ checked: boolean }>`
    width: 40px;
    height: 20px;
    background: ${(props) =>
        props.checked ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.15)'};
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    transition: background 0.3s ease;
    border: 1px solid ${(props) =>
        props.checked ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'};

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        left: ${(props) => (props.checked ? '22px' : '2px')};
        width: 14px;
        height: 14px;
        background: ${(props) => (props.checked ? 'rgb(25, 25, 25)' : 'white')};
        border-radius: 50%;
        transition: left 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`

export const SettingsButton = styled.button<{ themeColor?: string }>`
    background: transparent;
    border: none;
    border-radius: 0.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    padding: 0.5em;
    color: ${(props) => props.themeColor || 'white'};

    &:hover {
        background: ${(props) => props.themeColor ? props.themeColor + '30' : '#383e4750'};
    }

    svg {
        display: block;
    }
`

export const GradientButton = styled.button<{ gradient: string; selected: boolean; isRandom?: boolean }>`
    width: 32px;
    height: 32px;
    background: ${(props) => props.gradient};
    border-radius: 50%;
    border: none;
    box-shadow: ${(props) =>
        props.selected
            ? '0 0 0 2px white'
            : '0 0 0 1.5px rgba(255, 255, 255, 0.3)'};
    cursor: ${(props) => (props.selected ? 'default' : 'pointer')};
    transition: all 0.2s ease;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;

    &:hover {
        box-shadow: ${(props) =>
            props.selected ? '0 0 0 2px white' : '0 0 0 1.5px rgba(255, 255, 255, 0.6)'};
        transform: ${(props) => (props.selected ? 'none' : 'translateY(-2px)')};
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: transparent;
        z-index: 0;
    }

    svg {
        position: relative;
        z-index: 1;
    }
`

export const FontSelectorWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const FontSelectorButton = styled.button<{ isOpen: boolean }>`
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    outline: none;
    text-align: left;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
    }

    &:focus {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.3);
    }

    &::after {
        content: '';
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%) ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid rgba(255, 255, 255, 0.7);
        transition: transform 0.2s ease;
    }
`

export const FontDropdown = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: rgb(30, 30, 30);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 6px;
    max-height: 240px;
    overflow-y: auto;
    z-index: 1000;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

export const FontOption = styled.div<{ selected: boolean }>`
    padding: 0.6rem 0.75rem;
    color: ${(props) => (props.selected ? 'white' : 'rgba(255, 255, 255, 0.8)')};
    background: ${(props) => (props.selected ? 'rgba(255, 255, 255, 0.1)' : 'transparent')};
    cursor: pointer;
    transition: all 0.15s ease;
    font-size: 0.9rem;
    font-weight: 300;

    &:hover {
        background: rgba(255, 255, 255, 0.08);
        color: white;
    }

    &:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    &:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`
