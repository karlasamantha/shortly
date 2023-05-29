import React from 'react'
import request from '../api/request'

function useFetch({ dependencies }: any) {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState(undefined)
  const [data, setData] = React.useState([])

  React.useEffect(() => {}, [])

  return {
    loading,
    error,
    data
  }
}

export default useFetch
