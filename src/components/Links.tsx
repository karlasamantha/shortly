import React from 'react'
import { ShortenedURLsProps } from '../types'

function Links({ urls }: ShortenedURLsProps) {
  return (
    <>
      {urls.map((url) => (
        <ul key={url.code}>
          <li>{url.full_short_link}</li>
          <li>{url.original_link}</li>
        </ul>
      ))}
    </>
  )
}

export default Links
