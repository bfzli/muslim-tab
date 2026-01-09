import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        // Add theme interface if needed in future
    }
}

// Extend styled-components props for background
export interface BackgroundProps {
    background?: string
}
