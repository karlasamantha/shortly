import React from 'react'
import { CurrentURLProps } from '../types'

function CurrentURL({ shortURL, originalURL }: CurrentURLProps) {
  return (
    <div>
      <p>{shortURL}</p>
      <p>{originalURL}</p>
    </div>
  )
}

export default CurrentURL
