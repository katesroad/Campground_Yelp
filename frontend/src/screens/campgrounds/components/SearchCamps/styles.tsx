import { Content } from 'components/lib'
import styled from 'styled-components'
import { medium, xlarge } from 'styles/media-queries'

export const Wrapper = styled(Content)`
  margin: calc(1rem + 1vw) auto;
  ${medium} {
    margin: calc(1.5rem + 1vw) auto;
  }
  ${xlarge} {
    margin: 2rem auto;
  }
  .search-box {
    margin: calc(1rem + 1vw) auto;
    ${medium} {
      margin: calc(1.5rem + 1vw) auto;
    }
    ${xlarge} {
      margin: 2rem auto;
    }
    position: relative;
    .search-icon {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translate(0, -50%);
    }
    .label {
      display: none;
    }
  }
`
