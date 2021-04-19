import { Content } from 'components/lib'
import styled from 'styled-components'
import { large, medium } from 'styles/media-queries'

export const Wrapper = styled(Content)`
  .title {
    margin-bottom: calc(1.5rem + 1vw);
    font-size: calc(1.5rem + 1vw);
    ${medium} {
      margin-bottom: calc(1.85rem + 1vw);
      font-size: calc(1.85rem + 1vw);
    }
    ${large} {
      margin-bottom: 2.5rem;
      font-size: 2.5rem;
    }
  }
  .view-all {
    display: block;
    margin-top: 1.5rem;
    color: var(--bs-blue);
    text-decoration: underline;
  }
`
