export type GradientType =
    | 'ocean'
    | 'sunset'
    | 'forest'
    | 'lavender'
    | 'fire'
    | 'night'
    | 'rose'
    | 'sky'
    | 'cherry'
    | 'cotton'
    | 'peach'
    | 'purple'
    | 'mint'
    | 'autumn'
    | 'azure'
    | 'ember'
    | 'lime'
    | 'gold'
    | 'coral'
    | 'indigo'
    | 'emerald'
    | 'amber'
    | 'teal'
    | 'magenta'
    | 'sage'

export interface GradientConfig {
    name: string
    gradient: string
}

export const gradients: Record<GradientType, GradientConfig> = {
    ocean: {
        name: 'Ocean',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    sunset: {
        name: 'Sunset',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    forest: {
        name: 'Forest',
        gradient: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)'
    },
    lavender: {
        name: 'Lavender',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    fire: {
        name: 'Fire',
        gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)'
    },
    night: {
        name: 'Night',
        gradient: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)'
    },
    rose: {
        name: 'Rose',
        gradient: 'linear-gradient(135deg, #e96443 0%, #904e95 100%)'
    },
    sky: {
        name: 'Sky',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    cherry: {
        name: 'Cherry',
        gradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)'
    },
    cotton: {
        name: 'Cotton Candy',
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
    },
    peach: {
        name: 'Peach',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    purple: {
        name: 'Purple Dream',
        gradient: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)'
    },
    mint: {
        name: 'Mint',
        gradient: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)'
    },
    autumn: {
        name: 'Autumn',
        gradient: 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)'
    },
    azure: {
        name: 'Azure',
        gradient: 'linear-gradient(135deg, #12c2e9 0%, #c471ed 0%, #f64f59 100%)'
    },
    ember: {
        name: 'Ember',
        gradient: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)'
    },
    lime: {
        name: 'Lime',
        gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)'
    },
    gold: {
        name: 'Gold',
        gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)'
    },
    coral: {
        name: 'Coral',
        gradient: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)'
    },
    indigo: {
        name: 'Indigo',
        gradient: 'linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)'
    },
    emerald: {
        name: 'Emerald',
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    amber: {
        name: 'Amber',
        gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)'
    },
    teal: {
        name: 'Teal',
        gradient: 'linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)'
    },
    magenta: {
        name: 'Magenta',
        gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)'
    },
    sage: {
        name: 'Sage',
        gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)'
    }
}
