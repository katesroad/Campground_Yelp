import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Header, Nav, NavLink, Main, Footer } from './styles'
import { useLogout } from 'hooks/auth.hooks'
import { useAuth } from 'context/auth.context'
import { Github } from 'components/Icons'

export const AppHeader: React.FC = () => {
  const mutation = useLogout()
  const handleClick = () => mutation.mutate()
  const { user } = useAuth()
  const { pathname } = useLocation()
  return (
    <Header as="header" className={pathname === '/' ? 'at-home' : 'at-page'}>
      <Link to="/" className="brand">
        YelpCamp
      </Link>
      <Nav>
        <NavLink to="campgrounds">Campgrounds</NavLink>
        {user ? (
          <button onClick={handleClick}>Logout</button>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">register</NavLink>
          </>
        )}
      </Nav>
    </Header>
  )
}

export const AppMain: React.FC = ({ children }) => {
  const { pathname } = useLocation()
  return pathname === '/' ? <>{children}</> : <Main>{children}</Main>
}

export const AppFooter: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <Footer className={pathname === '/' ? 'at-home' : 'at-page'}>
      <p>
        <span>© 2020</span>
        <a href="https://github.com/katesroad/campground_yelp">
          <Github />
        </a>
      </p>
    </Footer>
  )
}
