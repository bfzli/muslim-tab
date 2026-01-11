import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {}
}

export interface BackgroundProps {
    background?: string
}
