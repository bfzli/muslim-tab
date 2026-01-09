import { LogoProps } from '@types'
import React from 'react'
import { Container, Elements } from '@styled/logo'
import LogoIcon from '@icons/LogoIcon'

const Logo: React.FC<LogoProps> = ({ top, setIsHover }) => {
    const enter = (): void => setIsHover(true)
    const leave = (): void => setIsHover(false)

    return (
        <Container onMouseEnter={enter} onMouseLeave={leave}>
            <Elements style={top}>
                <LogoIcon size='2.5em' />
            </Elements>
        </Container>
    )
}

export default Logo
