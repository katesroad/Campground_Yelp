import { Content } from 'components/lib'
import styled from 'styled-components'
import { medium, xlarge } from 'styles/media-queries'

export const SearchWrap = styled(Content)`
  margin: calc(1rem + 1vw) auto;
  ${medium} {
    margin: calc(1.5rem + 1vw) auto;
  }
  ${xlarge} {
    margin: 2.5rem auto;
  }
  .search-title {
    margin: calc(1rem + 1vw) auto;
    ${medium} {
      margin: calc(1rem + 1vw) auto;
    }
    ${xlarge} {
      margin: 1.5rem auto;
    }
    svg {
      font-size: 0.9375rem;
    }
    small {
      font-size: 0.9375rem;
      font-weight: var(--font-normal);
    }
  }
`
