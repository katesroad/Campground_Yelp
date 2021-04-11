import styled from 'styled-components'
import { medium, large } from 'styles/media-queries'

export const Wrapper = styled.div.attrs(() => ({ className: 'camp-intro' }))``

export const IntroText = styled.div`
  &:nth-child(2n) {
    margin-top: 2rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
  }
  button,
  span {
    margin-right: 1rem;
  }
`

export const CampOperations = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  button {
    background-color: var(--bs-blue);
    &.btn--review {
      background-color: var(--bs-secondary);
    }
    &.btn--mark {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: var(--bs-green);
      svg {
        margin-left: 0.25rem;
      }
    }
  }
`
