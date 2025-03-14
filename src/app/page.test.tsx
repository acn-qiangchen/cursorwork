import { render, screen } from '@testing-library/react'
import Home from './page'
import { HTMLMotionProps } from 'framer-motion'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: HTMLMotionProps<'div'>) => <div {...props}>{children}</div>,
  },
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => {
    return <img src={src} alt={alt} />
  },
}))

describe('Home', () => {
  it('renders hero section with title and buttons', () => {
    render(<Home />)
    
    // Check if main title is present
    expect(screen.getByText('The AI-First Code Editor')).toBeInTheDocument()
    
    // Check if description is present
    expect(screen.getByText(/Write better code faster/)).toBeInTheDocument()
    
    // Check if CTA buttons are present
    expect(screen.getByRole('button', { name: 'Download Now' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Try Online' })).toBeInTheDocument()
  })

  it('renders features section with all feature cards', () => {
    render(<Home />)
    
    // Check if section title is present
    expect(screen.getByRole('heading', { name: 'Powerful Features' })).toBeInTheDocument()
    
    // Check if all feature cards are present
    expect(screen.getByText('AI Code Completion')).toBeInTheDocument()
    expect(screen.getByText('Smart Refactoring')).toBeInTheDocument()
    expect(screen.getByText('Natural Language Commands')).toBeInTheDocument()
  })
}) 