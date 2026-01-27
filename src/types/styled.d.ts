import 'styled-components'

declare module 'styled-components' {
    export type DefaultTheme = Record<string, never>
}
