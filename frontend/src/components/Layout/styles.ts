import styled from 'styled-components'
import { medium, large } from 'styles/media-queries'

export const Header = styled.header`
  padding: 1.25rem 0;
  z-index: 2000;
  color: rgba(255, 255, 255, 0.5);
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand {
    font-size: 1.25rem;
    padding: 0.3125rem 0;
    font-size: 1.25rem;
    font-weight: var(--font-bolder);
    ${large} {
      font-size: 1.5rem;
    }
  }
  .btn-menu {
    position: fixed;
    right: 0;
    top: 2.1875rem;
    min-width: 3rem;
    min-height: 1.5rem;
    transform: translate(0, -50%);
    ${medium} {
      display: none !important;
    }
  }
  &.at-page {
    color: rgba(255, 255, 255, 0.55);
    background-color: #343a40;
  }
`

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(0, -100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 1rem 0;
  background: #343a40;
  transition: all 0.25s ease;

  &.is-visible {
    transform: translate(0, 4.375rem);
  }

  .btn-logout {
    path {
      stroke: #fff;
    }
  }

  a {
    margin-bottom: 1rem;
    border-bottom: 0.125rem solid transparent;
    font-size: 1rem;
    font-weight: var(--font-bold);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
    text-transform: capitalize;
    &.active,
    :hover {
      color: var(--bs-white);
      border-bottom-color: white;
    }
    ${medium} {
      margin-left: 1rem;
      margin-bottom: 0;
    }
  }
  ${medium} {
    flex-direction: row;
    position: static;
    padding: 0;
    width: auto;
    justify-content: flex-end;
    transform: translate(0);
    background-color: transparent;
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
