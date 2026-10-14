import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './button'

describe('ui/button', () => {
  it('renders with the chamfered primary style', () => {
    render(<Button>Engage</Button>)
    expect(screen.getByRole('button', { name: 'Engage' }).className).toContain('chamfer')
  })
})
