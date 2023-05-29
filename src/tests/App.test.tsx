import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../components/App'

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

test('it should render CurrentURL after successful API response and should be able to copy text', async () => {
  render(<App />)
  const inputElement = screen.getByPlaceholderText('Enter URL here')
  const submitButton = screen.getByRole('button', { name: 'Shorten URL' })
  fireEvent.change(inputElement, { target: { value: 'https://www.test.com' } })
  fireEvent.click(submitButton)

  await screen.findByTestId('current')
  expect(screen.getByTestId('current')).toBeInTheDocument()

  const copyButton = screen.getByRole('button', { name: 'Copy' })
  fireEvent.click(copyButton)
  await screen.findByText(/Copied!/i)
  expect(screen.getByText(/Copied!/i)).toBeInTheDocument()
})

test('it should render ShortenedURLs after successful API response', async () => {
  render(<App />)
  const inputElement = screen.getByPlaceholderText('Enter URL here')
  const submitButton = screen.getByRole('button', { name: 'Shorten URL' })
  fireEvent.change(inputElement, { target: { value: 'https://www.test.com' } })
  fireEvent.click(submitButton)

  await screen.findByTestId(/previous-urls/i)
  expect(screen.getByTestId(/previous-urls/i)).toBeInTheDocument()
})
