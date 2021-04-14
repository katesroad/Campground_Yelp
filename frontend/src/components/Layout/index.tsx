import * as React from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { GrLogout } from 'react-icons/gr'
import { useLogout } from 'hooks/auth.hooks'
import { useAuth } from 'context/auth.context'
import { Github } from 'components/Icons'
import { Button, Content } from 'components/lib'
import { Header, Nav, Main, Footer } from './styles'

export const AppHeader: React.FC = () => {
  const { user } = useAuth()
  const { pathname } = useLocation()
  const [menuIsOpen, setMenuIsPen] = React.useState<boolean>(false)

  const m = useLogout()
  const handleClick = () => m.mutate()

  React.useEffect(() => {
    setMenuIsPen(false)
  }, [pathname, user])

  return (
    <Header className={pathname === '/' ? 'at-home' : 'at-page'}>
      <Content className="content">
        <Link to="/" className="brand">
          YelpCamp
        </Link>

        {/* the menu toggle button for mobile version */}
        <Button
          className="btn-menu"
          onClick={() => setMenuIsPen(!menuIsOpen)}
          role="button"
        >
          {menuIsOpen ? <CgClose /> : <AiOutlineMenu />}
        </Button>

        {/* the nav items */}
        <Nav className={menuIsOpen ? 'is-visible' : 'not-visible'}>
          <NavLink to="/campgrounds" exact>
            Campgrounds
          </NavLink>
          {user ? (
            <>
              <NavLink to="/campgrounds/create">New Campground</NavLink>
              <Button onClick={handleClick} className="btn-logout">
                <GrLogout />
              </Button>
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
