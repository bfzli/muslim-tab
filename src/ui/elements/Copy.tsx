import type { CopyProps } from '@types'
import React, { useState } from 'react'
import { Element, Name } from '@styled/elements'
import { CopiedIcon, CopyIcon } from '@icons'
import { CopyToClipboard } from '@utils'

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

export { Copy }
