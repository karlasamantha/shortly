import React from 'react'
import { CurrentURLProps } from '../types'
import '../styles/CurrentURL.css'

function CurrentURL({ shortURL, originalURL }: CurrentURLProps) {
  const [isCopied, setIsCopied] = React.useState<boolean>(false)

  function handleCopy() {
    setIsCopied(true)
    setTimeout(async () => {
      await navigator.clipboard.writeText(shortURL)
      setIsCopied(false)
    }, 900)
  }

  return (
    <div className="container">
      <div className="current-url">
        <input type="text" value={shortURL} readOnly />
        <button onClick={handleCopy}>
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <span>
        Original URL: <a href={originalURL}>{originalURL}</a>
      </span>
    </div>
  )
}

export default CurrentURL
