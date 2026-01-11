import { LogoProps } from '@types'
import React, { useState } from 'react'
import { Container, InnerContainer, Elements, SettingsButtonWrapper } from '@styled/logo'
import LogoIcon from '@icons/LogoIcon'
import { SettingsButton } from '@components/Settings/Components'
import { Settings } from 'lucide-react'

interface LogoExtendedProps extends LogoProps {
    themeColor?: string
}

const Logo: React.FC<LogoExtendedProps> = ({ top, setIsHover, onSettingsClick, isSettingsOpen, themeColor }) => {
    const [isHovering, setIsHovering] = useState(false)

    const enter = (): void => {
        setIsHover(true)
        setIsHovering(true)
    }

    const leave = (): void => {
        setIsHover(false)
        setIsHovering(false)
    }

    return (
        <Container onMouseEnter={enter} onMouseLeave={leave}>
            <InnerContainer style={top}>
                <Elements>
                    <LogoIcon size='2.5em' color={themeColor} />
                </Elements>
                <SettingsButtonWrapper visible={isHovering} disabled={isSettingsOpen}>
                    <SettingsButton onClick={onSettingsClick} themeColor={themeColor}>
                        <Settings size={18} />
                    </SettingsButton>
                </SettingsButtonWrapper>
            </InnerContainer>
        </Container>
    )
}

export default Logo
