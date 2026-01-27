import type { LogoExtendedProps } from '@types'
import React, { useState } from 'react'
import {
    Container,
    InnerContainer,
    Elements,
    SettingsButtonWrapper
} from '@styled/logo'
import { LogoIcon } from '@icons'
import { SettingsButton } from '@styled/settings'
import { Settings } from 'lucide-react'

const Logo: React.FC<LogoExtendedProps> = ({
    top,
    setIsHover,
    onSettingsClick,
    isSettingsOpen,
    themeColor
}) => {
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
                <SettingsButtonWrapper
                    visible={isHovering}
                    disabled={isSettingsOpen}
                >
                    <SettingsButton
                        onClick={onSettingsClick}
                        themeColor={themeColor}
                    >
                        <Settings size={18} />
                    </SettingsButton>
                </SettingsButtonWrapper>
            </InnerContainer>
        </Container>
    )
}

export { Logo }
