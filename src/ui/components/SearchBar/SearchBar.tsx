import React, { useState } from 'react'
import {
    SearchContainer,
    SearchForm,
    SearchInput,
    SearchIcon,
    GoogleIcon
} from './Components'
import { SearchProvider, searchProviders } from '@types'

interface SearchBarProps {
    provider: SearchProvider
}

const SearchBar: React.FC<SearchBarProps> = ({ provider }) => {
    const [query, setQuery] = useState<string>('')
    const currentProvider = searchProviders[provider]

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (query.trim()) {
            window.location.href = `${currentProvider.url}${encodeURIComponent(
                query.trim()
            )}`
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <SearchContainer>
            <SearchForm onSubmit={handleSubmit}>
                <GoogleIcon color={currentProvider.color}>
                    {currentProvider.icon}
                </GoogleIcon>
                <SearchInput
                    type="text"
                    placeholder={`${currentProvider.verb || 'Search'} ${currentProvider.name}...`}
                    value={query}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <SearchIcon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </SearchIcon>
            </SearchForm>
        </SearchContainer>
    )
}

export default SearchBar
