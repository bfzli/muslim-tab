import React from 'react'
import { Icon } from '@iconify/react'

export type SearchProvider =
    | 'google'
    | 'duckduckgo'
    | 'bing'
    | 'brave'
    | 'yahoo'
    | 'chatgpt'
    | 'ecosia'
    | 'perplexity'

export interface SearchProviderConfig {
    name: string
    url: string
    icon: React.ReactNode
    color: string
    verb?: string // Optional verb for placeholder (defaults to "Search")
}

export const searchProviders: Record<SearchProvider, SearchProviderConfig> = {
    google: {
        name: 'Google',
        url: 'https://www.google.com/search?q=',
        icon: <Icon icon="simple-icons:google" width="16" height="16" />,
        color: '#4285F4'
    },
    duckduckgo: {
        name: 'DuckDuckGo',
        url: 'https://duckduckgo.com/?q=',
        icon: <Icon icon="simple-icons:duckduckgo" width="16" height="16" />,
        color: '#DE5833'
    },
    bing: {
        name: 'Bing',
        url: 'https://www.bing.com/search?q=',
        icon: <Icon icon="mdi:microsoft-bing" width="16" height="16" />,
        color: '#008373'
    },
    brave: {
        name: 'Brave',
        url: 'https://search.brave.com/search?q=',
        icon: <Icon icon="simple-icons:brave" width="16" height="16" />,
        color: '#FB542B'
    },
    yahoo: {
        name: 'Yahoo',
        url: 'https://search.yahoo.com/search?p=',
        icon: <Icon icon="simple-icons:yahoo" width="16" height="16" />,
        color: '#5F01D1'
    },
    chatgpt: {
        name: 'ChatGPT',
        url: 'https://chat.openai.com/?q=',
        icon: <Icon icon="simple-icons:openai" width="16" height="16" />,
        color: '#10A37F',
        verb: 'Ask'
    },
    ecosia: {
        name: 'Ecosia',
        url: 'https://www.ecosia.org/search?q=',
        icon: <Icon icon="simple-icons:ecosia" width="16" height="16" />,
        color: '#60B515'
    },
    perplexity: {
        name: 'Perplexity',
        url: 'https://www.perplexity.ai/search?q=',
        icon: <Icon icon="simple-icons:perplexity" width="16" height="16" />,
        color: '#20808D',
        verb: 'Ask'
    }
}
