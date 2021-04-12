import { Content } from 'components/lib'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import { medium } from 'styles/media-queries'

export const Header = styled(Content)`
  position: relative;
  z-index: 2000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  .brand {
    font-size: 1.75rem;
    color: var(--bs-white);
  }
  &.at-page {
    color: rgba(255, 255, 255, 0.55);
    background-color: #343a40;
    ${medium} {
      width: 100vw;
      padding-left: 24px;
      padding-right: 24px;
      max-width: none;
    }
    .brand {
      padding-top: 0.3125rem;
      padding-bottom: 0.3125rem;
      margin-right: 1rem;
      font-size: 1.25rem;
    }
  }
  a,
  button {
    margin-left: 1rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const NavLink = styled(Link).attrs(() => ({
  activeClassName: 'active',
  className: 'nav-link',
}))`
  display: block;
  padding: 0.5rem 0;
  border-bottom: 0.25rem solid transparent;
  font-weight: var(--font-bold);
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  text-transform: capitalize;
  &.active {
    color: var(--bs-white);
    border-bottom-color: white;
  }
`

export const Main = styled.main`
  flex-grow: 1;
  width: 100vw;
  padding-top: calc(1.25rem + 2vw);
  padding-bottom: calc(3.25rem + 2vw);
  ${medium} {
    padding-top: 3.35rem;
    padding-bottom: 5rem;
  }
`

export const Footer = styled.footer`
  width: 100vw;
  text-align: center;
  color: rgba(255, 255, 255, 0.5) !important;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
  }
  a {
    margin-left: 1rem;
    svg {
      max-width: 1.5rem;
    }
  }
  &.at-page {
    background-color: #343a40;
  }
  &.at-home {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
