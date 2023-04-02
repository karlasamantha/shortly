import React from 'react'

import request from './api/request'
import Error from './components/Error'
import Loading from './components/Loading'
import { ShrtcodeResponse } from './types'

import './App.css'

function App() {
  const [query, setQuery] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)
  const [data, setData] = React.useState<undefined | ShrtcodeResponse>(
    undefined
  )

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    setIsLoading(true)
    try {
      const res = await request(query)

      if (!res.ok) {
        setError(true)
      }

      setData(res.result)
    } catch (error) {
      setError(true)
    }

    setIsLoading(false)
    setQuery('')
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="url-input"></label>
        <input
          required
          type="text"
          id="url-input"
          placeholder="Copy URL here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
        />
      </form>

      {isLoading && <Loading />}

      {data && (
        <>
          <span>{data.full_share_link}</span>
          <span>{data.full_short_link}</span>
          <span>{data.share_link}</span>
          <span>{data.short_link}</span>
        </>
      )}

      {error && <Error>Something went wrong</Error>}
    </div>
  )
}

export default App
