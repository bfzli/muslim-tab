import { IconProps } from '@types'
import React from 'react'

const SettingsIcon: React.FC<IconProps> = ({ size = '1.2em', color = '#FFF' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"></path>
            <path d="M20.49 8l-4.24 4.24M12.75 12.75 8.51 16.99M3.51 8l4.24 4.24M12.75 11.25 16.99 7.01"></path>
        </svg>
    )
}

export default SettingsIcon
