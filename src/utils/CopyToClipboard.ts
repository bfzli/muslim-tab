const CopyToClipboard = (
    content: string | undefined,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
): void => {
    if (!content) return

    const msg = 'Something wen\t wrong while trying to copy this text.'

    navigator.clipboard
        .writeText(content)
        .then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1000)
        })
        .catch(() => alert(msg))
}

export default CopyToClipboard
