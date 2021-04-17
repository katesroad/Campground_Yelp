import styled from 'styled-components'
import { medium } from 'styles/media-queries'

export const Wrapper = styled.div`
  display: none;
  ${medium} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background-color: #eee;
    svg {
      font-size: 4rem;
    }
  }
`
