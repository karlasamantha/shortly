import React from 'react'
import { ShortenedURLsProps } from '../types'
import '../styles/ShortenedURLs.css'

function ShortenedURLs({ urls }: ShortenedURLsProps) {
  const urlsSlice = urls.length > 3 ? urls.slice(-4, -1) : urls

  return (
    <div className="previous" data-testid="previous-urls">
      <h2>Previous URLs</h2>

      <div className="links-container">
        {urlsSlice.map((url) => {
          const slicedOriginalUrl = `${url?.original_link.slice(0, 35)}...`

          return (
            <ul key={url.code}>
              <li>
                <a href={url.full_short_link}>{url.full_short_link}</a>
              </li>
              <li>
                Original: <a href={url.original_link}>{slicedOriginalUrl}</a>
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(ShortenedURLs)
