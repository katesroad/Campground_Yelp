import * as React from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useLogout } from 'hooks/auth.hooks'
import { useAuth } from 'context/auth.context'
import { Github } from 'components/Icons'
import { Content } from 'components/lib'
import { Header, Nav, Main, Footer } from './styles'

export const AppHeader: React.FC = () => {
  const mutation = useLogout()
  const handleClick = () => mutation.mutate()
  const { user } = useAuth()
  const { pathname } = useLocation()
  return (
    <Header className={pathname === '/' ? 'at-home' : 'at-page'}>
      <Content className="header-content">
        <Link to="/" className="brand">
          YelpCamp
        </Link>
        <Nav>
          <NavLink to="/campgrounds" exact>
            Campgrounds
          </NavLink>
          {user ? (
            <>
              <NavLink to="/campgrounds/create">New Campground</NavLink>
              <button onClick={handleClick}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" exact>
                Login
              </NavLink>
              <NavLink to="/register" exact>
                register
              </NavLink>
            </>
          )}
        </Nav>
      </Content>
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
