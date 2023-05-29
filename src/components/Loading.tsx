import React from 'react'
import { ReactComponent as Loader } from '../assets/loading.svg'
import '../styles/Loading.css'

function Loading() {
  return (
    <div data-testid="loading" className="loading-container">
      <div className="spinner"></div>
    </div>
  )
}

export default Loading
