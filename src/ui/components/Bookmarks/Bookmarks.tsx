import React, { useEffect, useState } from 'react'
import {
    BookmarksContainer,
    BookmarkItem,
    BookmarkIcon,
    BookmarkTitle
} from '@styled/bookmarks'

interface Bookmark {
    id: string
    title: string
    url?: string
}

const isAppropriateContent = (url: string, title: string): boolean => {
    const inappropriate = [
        'porn',
        'xxx',
        'sex',
        'adult',
        'nsfw',
        'nude',
        'erotic',
        'fetish',
        'dating',
        'onlyfans',
        'xvideos',
        'pornhub',
        'xhamster',
        'redtube',
        'youporn',
        'tube8',
        'spankwire',
        'keezmovies',
        'extremetube'
    ]

    const urlLower = url.toLowerCase()
    const titleLower = title.toLowerCase()

    return !inappropriate.some(
        (keyword) => urlLower.includes(keyword) || titleLower.includes(keyword)
    )
}

interface BookmarksProps {
    themeColor?: string
}

const Bookmarks: React.FC<BookmarksProps> = ({ themeColor }) => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

    const fetchBookmarks = async () => {
        if (typeof chrome !== 'undefined' && chrome.bookmarks) {
            try {
                const bookmarkBar = await chrome.bookmarks.getChildren('1')

                const urls = bookmarkBar
                    .filter(
                        (bookmark) =>
                            bookmark.url &&
                            isAppropriateContent(
                                bookmark.url,
                                bookmark.title
                            )
                    )
                    .slice(0, 16)
                    .map((bookmark) => ({
                        id: bookmark.id,
                        title: bookmark.title,
                        url: bookmark.url
                    }))

                setBookmarks(urls)
            } catch (error) {}
        }
    }

    useEffect(() => {
        fetchBookmarks()

        if (typeof chrome !== 'undefined' && chrome.bookmarks) {
            const handleBookmarkChange = () => {
                fetchBookmarks()
            }

            chrome.bookmarks.onCreated.addListener(handleBookmarkChange)
            chrome.bookmarks.onRemoved.addListener(handleBookmarkChange)
            chrome.bookmarks.onChanged.addListener(handleBookmarkChange)
            chrome.bookmarks.onMoved.addListener(handleBookmarkChange)

            return () => {
                chrome.bookmarks.onCreated.removeListener(handleBookmarkChange)
                chrome.bookmarks.onRemoved.removeListener(handleBookmarkChange)
                chrome.bookmarks.onChanged.removeListener(handleBookmarkChange)
                chrome.bookmarks.onMoved.removeListener(handleBookmarkChange)
            }
        }
        return undefined
    }, [])

    if (bookmarks.length === 0) {
        return null
    }

    const getFaviconUrl = (url: string) => {
        try {
            const domain = new URL(url).hostname
            return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
        } catch {
            return ''
        }
    }

    const getFirstLetter = (title: string) => {
        return title.charAt(0).toUpperCase()
    }

    return (
        <BookmarksContainer>
            {bookmarks.map((bookmark) => (
                <BookmarkItem
                    key={bookmark.id}
                    href={bookmark.url}
                    target='_self'
                >
                    <BookmarkIcon themeColor={themeColor}>
                        {bookmark.url ? (
                            <img
                                src={getFaviconUrl(bookmark.url)}
                                alt=''
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none'
                                    const parent = e.currentTarget.parentElement
                                    if (parent) {
                                        parent.textContent = getFirstLetter(
                                            bookmark.title
                                        )
                                    }
                                }}
                            />
                        ) : (
                            getFirstLetter(bookmark.title)
                        )}
                    </BookmarkIcon>
                    <BookmarkTitle themeColor={themeColor}>{bookmark.title}</BookmarkTitle>
                </BookmarkItem>
            ))}
        </BookmarksContainer>
    )
}

export default Bookmarks
