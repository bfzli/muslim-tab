import { ContentProps } from '@types'
import React, { useState } from 'react'
import { Element, Name } from '@styled/elements'
import CopiedIcon from '@icons/CopiedIcon'
import CopyIcon from '@icons/CopyIcon'
import { CopyToClipboard } from '@utils'

interface CopyProps extends ContentProps {
    themeColor?: string
}

const Copy: React.FC<CopyProps> = ({ content, themeColor }) => {
    const [copied, setCopied] = useState<boolean>(false)

    const action = (): void => {
        if (!copied) {
            CopyToClipboard(content?.content, setCopied)
        }
    }

    return (
        <Element onClick={action} themeColor={themeColor}>
            {copied ? <CopiedIcon size='1em' /> : <CopyIcon size='1em' />}
            <Name themeColor={themeColor}>{copied ? 'Copied' : 'Copy'}</Name>
        </Element>
    )
}

export default Copy
