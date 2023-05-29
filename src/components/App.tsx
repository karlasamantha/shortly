import React from 'react'

import request from '../api/request'
import Error from './Error'
import CurrentURL from './CurrentURL'
import ShortenedURLs from './ShortenedURLs'
import { ShrtcodeResultType } from '../types'
import { getResultFromResponse, isErrorResponse } from '../utils'

import '../styles/App.css'
import Loading from './Loading'

function App() {
  const [shortenedURLs, setShortenedURLs] = React.useState(() => {
    const items = window.localStorage.getItem('shortened-urls')
    const urls = items ? JSON.parse(items) : []
    return urls
  })
  const [query, setQuery] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<undefined | string>(undefined)
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
    setError(undefined)
    try {
      const response = await request(query)

      if (!response.ok && isErrorResponse(response)) {
        setError(response.error)
      }

      const result = getResultFromResponse(response)

      setData(result)

      const currentURL = [result]
      const newUrls = [...shortenedURLs, ...currentURL].filter((item) => {
        return item !== null && item !== undefined
      })

      setShortenedURLs(newUrls)
      setQuery('')
    } catch (err) {
      setError(`Something went wrong: ${err}`)
      console.error(`Something went wrong: ${err}`)
    }

    setIsLoading(false)
  }

  React.useEffect(() => {
    const urls = JSON.stringify(shortenedURLs)
    window.localStorage.setItem('shortened-urls', urls)
  }, [shortenedURLs])

  return (
    <div className="App">
      <h1>Shortly</h1>
      <form onSubmit={handleSubmit}>
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
        <button disabled={isLoading}>
          {isLoading ? <Loading /> : 'Shorten URL'}
        </button>
      </form>

      {error && <Error>{error}</Error>}

      {data && (
        <CurrentURL
          shortURL={data?.full_short_link}
          originalURL={data?.original_link}
        />
      )}

      {shortenedURLs.length !== 0 && <ShortenedURLs urls={shortenedURLs} />}
    </div>
  )
}

export default App
