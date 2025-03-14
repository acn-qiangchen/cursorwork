import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from './Navigation'

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
  MockLink.displayName = 'MockLink'
  return MockLink
})

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { animate } = props
      return (
        <div
          data-testid={props['data-testid']}
          style={{ opacity: animate?.opacity }}
          className={props.className}
        >
          {children}
        </div>
      )
    },
  },
}))

describe('Navigation', () => {
  it('renders the logo and navigation links', () => {
    render(<Navigation />)
    
    // Check if logo is present
    expect(screen.getByText('Cursor')).toBeInTheDocument()
    
    // Check if navigation links are present in desktop menu
    const desktopMenu = screen.getAllByRole('navigation')[0]
    expect(desktopMenu).toBeInTheDocument()
    expect(desktopMenu).toHaveTextContent('Features')
    expect(desktopMenu).toHaveTextContent('Pricing')
    expect(desktopMenu).toHaveTextContent('Blog')
    expect(desktopMenu).toHaveTextContent('Download')
  })

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Navigation />)
    
    // Initially, mobile menu should be closed
    const mobileMenu = screen.getByTestId('mobile-menu')
    expect(mobileMenu).toHaveStyle({ opacity: 0 })
    
    // Click hamburger button
    const menuButton = screen.getByRole('button')
    fireEvent.click(menuButton)
    
    // Menu should now be open
    expect(mobileMenu).toHaveStyle({ opacity: 1 })
    
    // Click again to close
    fireEvent.click(menuButton)
    
    // Menu should be closed again
    expect(mobileMenu).toHaveStyle({ opacity: 0 })
  })
}) 