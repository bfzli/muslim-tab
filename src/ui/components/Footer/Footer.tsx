import type { FooterExtendedProps } from '@types'
import React from 'react'
import { Container, Elements, Breakspace } from '@styled/footer'
import { Next, Copy, Mode } from '@elements'

const Footer: React.FC<FooterExtendedProps> = (props) => {
    const enter = (): void => props.setIsHover(true)
    const leave = (): void => props.setIsHover(false)

    return (
        <Container onMouseEnter={enter} onMouseLeave={leave}>
            <Elements style={props.bottom}>
                <Breakspace />
                <Copy
                    content={props.content}
                    setContent={props.setContent}
                    themeColor={props.themeColor}
                />
                <Breakspace />
                <Mode
                    mode={props.mode}
                    setMode={props.setMode}
                    themeColor={props.themeColor}
                />
                <Breakspace />
                <Next
                    mode={props.mode}
                    content={props.content}
                    setContent={props.setContent}
                    wallpaper={props.wallpaper}
                    setWallpaper={props.setWallpaper}
                    themeColor={props.themeColor}
                />
            </Elements>
        </Container>
    )
}

export { Footer }
