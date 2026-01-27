import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 18vh;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    z-index: 999;
`

export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    transition: all ease-in-out 0.3s;
`

export const Elements = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1;
`

export const SettingsButtonWrapper = styled.div<{
    visible: boolean
    disabled?: boolean
}>`
    opacity: ${(props) => (props.disabled ? 0.5 : props.visible ? 1 : 0)};
    transition: opacity 0.3s ease;
    pointer-events: ${(props) =>
        props.disabled ? 'none' : props.visible ? 'auto' : 'none'};
    display: flex;
    align-items: center;

    button {
        cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

        &:hover {
            background: ${(props) =>
                props.disabled ? 'transparent' : '#383e4760'};
        }
    }
`
