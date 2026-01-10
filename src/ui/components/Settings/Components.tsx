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

export const ProviderButton = styled.button<{ selected: boolean; color: string }>`
    background: ${(props) =>
        props.selected ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
    color: ${(props) => (props.selected ? 'rgb(59, 130, 246)' : 'rgba(255, 255, 255, 0.7)')};
    border: 1px solid
        ${(props) =>
            props.selected ? 'rgba(59, 130, 246, 0.6)' : 'rgba(255, 255, 255, 0.1)'};
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
            props.selected ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.3)'};
        border-color: ${(props) =>
            props.selected ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.8)'};
        color: rgb(59, 130, 246);
    }

    svg {
        flex-shrink: 0;
    }
`

export const ToggleSwitch = styled.div<{ checked: boolean }>`
    width: 40px;
    height: 20px;
    background: ${(props) =>
        props.checked ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.15)'};
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    transition: background 0.3s ease;
    border: 1px solid ${(props) =>
        props.checked ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.2)'};

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        left: ${(props) => (props.checked ? '22px' : '2px')};
        width: 14px;
        height: 14px;
        background: white;
        border-radius: 50%;
        transition: left 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`

export const SettingsButton = styled.button`
    background: transparent;
    border: none;
    border-radius: 0.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    padding: 1em;
    color: white;

    &:hover {
        background: #383e4760;
    }

    svg {
        display: block;
    }
`
