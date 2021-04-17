import styled from 'styled-components'
import { medium } from 'styles/media-queries'

export const Wrapper = styled.div`
  display: none;
  ${medium} {
    display: block;
    height: 36vh;
  }
`
