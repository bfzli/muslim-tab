export const preloadImage = (imageNumber: number): Promise<void> => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = reject
        img.src = `/backgrounds/${imageNumber}.webp`
    })
}
