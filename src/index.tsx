import React from 'react'
import ReactDOM from 'react-dom'

import { Content } from '@ui/components'

import '@ui/styles/css.css'

const root = document.getElementById('root')

if (root) {
    ReactDOM.render(
        <React.StrictMode>
            <Content />
        </React.StrictMode>,
        root
    )
}
