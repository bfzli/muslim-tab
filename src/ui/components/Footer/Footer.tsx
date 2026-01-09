import { FooterProps } from '@types'
import React from 'react'
import { Container, Elements, Breakspace } from '@styled/footer'
import Next from '@elements/Next'
import Copy from '@elements/Copy'
import Mode from '@elements/Mode'

const Footer: React.FC<FooterProps> = (props) => {
    const enter = (): void => props.setIsHover(true)
    const leave = (): void => props.setIsHover(false)

    return (
        <Container onMouseEnter={enter} onMouseLeave={leave}>
            <Elements style={props.bottom}>
                <Breakspace />
                <Copy content={props.content} setContent={props.setContent} />
                <Breakspace />
                <Mode mode={props.mode} setMode={props.setMode} />
                <Breakspace />
                <Next
                    content={props.content}
                    setContent={props.setContent}
                    setWallpaper={props.setWallpaper}
                />
            </Elements>
        </Container>
    )
}

export default Footer
