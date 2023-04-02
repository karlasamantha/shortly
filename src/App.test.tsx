import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders form input', () => {
  render(<App />)
  const linkElement = screen.getByPlaceholderText(/Enter URL here/i)
  expect(linkElement).toBeInTheDocument()
})

test('it should render the Loading component when submitting the form', async () => {
  render(<App />)
  const inputElement = screen.getByPlaceholderText('Enter URL here')
  const submitButton = screen.getByRole('button', { name: 'Shorten URL' })
  fireEvent.change(inputElement, { target: { value: 'https://www.test.com' } })
  fireEvent.click(submitButton)
  expect(screen.getByTestId('loading')).toBeInTheDocument()
})

test('it should render the Error component after unsuccessful API request', async () => {})
