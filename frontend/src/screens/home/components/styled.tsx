import { Content } from 'components/lib'
import styled from 'styled-components'
import { medium } from 'styles/media-queries'

export const Wrapper = styled('main')`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=800);
  ${medium} {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(https://images.unsplash.com/photo-1559521783-1d1599583485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  }
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
`

export const Intro = styled(Content)`
  color: var(--bs-white);
  text-align: center;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  h1 {
    margin-bottom: 0.5rem;
    line-height: 1.2;
    font-size: 2.5rem;
  }
  p {
    margin-bottom: 1.75rem;
    font-size: 1.25rem;
    line-height: var(--p-line-height);
  }
  a {
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    font-size: 1.25rem;
    font-weight: var(--font-bolder);
    color: #333;
    background-color: var(--bs-white);
  }
`
