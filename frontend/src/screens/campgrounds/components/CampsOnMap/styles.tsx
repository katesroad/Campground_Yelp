import styled from 'styled-components'
import { medium, xlarge } from 'styles/media-queries'

export const Wrapper = styled.div`
  display: none;
  ${medium} {
    display: block;
    height: 66vh;
  }
  ${xlarge} {
    height: 50vh;
  }
`
