import styled from 'styled-components'
import { medium, large } from 'styles/media-queries'

export const Header = styled.header`
  position: relative;
  padding: 1.25rem 0;
  z-index: 2000;
  color: rgba(255, 255, 255, 0.5);
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand {
    font-size: 1.25rem;
    font-weight: var(--font-bolder);
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    font-size: 1.25rem;
    ${large} {
      font-size: 1.5rem;
    }
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
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    margin-left: 1rem;
    font-size: 1rem;
    border-bottom: 0.125rem solid transparent;
    font-weight: var(--font-bold);
    color: inherit;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
    text-transform: capitalize;
    &.active,
    :hover {
      color: var(--bs-white);
      border-bottom-color: white;
    }
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
