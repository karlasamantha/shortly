import React from 'react'
import { ChildrenProps } from '../types'

function Error({ children }: ChildrenProps) {
  return <div data-testid="error">{children}</div>
}

export default Error
