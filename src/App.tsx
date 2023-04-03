import React from 'react'

import request from './api/request'
import Error from './components/Error'
import Loading from './components/Loading'
import CurrentURL from './components/CurrentURL'
import ShortenedURLs from './components/ShortenedURLs'

import { ShrtcodeResultType } from './types'

import './styles/App.css'

function App() {
  const [shortenedURLs, setShotenedURLs] = React.useState(() => {
    const items = window.localStorage.getItem('shortened-urls')
    const urls = items ? JSON.parse(items) : []
    return urls
  })
  const [query, setQuery] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)
  const [data, setData] = React.useState<undefined | ShrtcodeResultType>(
    undefined
  )

  React.useEffect(() => {
    const urls = JSON.stringify(shortenedURLs)
    window.localStorage.setItem('shortened-urls', urls)
  }, [shortenedURLs])

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    setIsLoading(true)
    try {
      const res = await request(query)

      if (!res.ok) {
        setError(true)
      }

      setData(res.result)

      const currentURL = [res.result]
      setShotenedURLs([...shortenedURLs, ...currentURL])
    } catch (error) {
      setError(true)
    }

    setIsLoading(false)
    setQuery('')
  }

  return (
    <div className="App">
      <h1>Shortly</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          required
          type="text"
          id="url-input"
          placeholder="Enter URL here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
          minLength={4}
        />
        <button>Shorten URL</button>
      </form>

      {isLoading && <Loading />}

      {data && (
        <CurrentURL
          shortURL={data.full_short_link}
          originalURL={data.original_link}
        />
      )}

      {shortenedURLs && <ShortenedURLs urls={shortenedURLs} />}

      {error && <Error>Something went wrong</Error>}
    </div>
  )
}

export default App
