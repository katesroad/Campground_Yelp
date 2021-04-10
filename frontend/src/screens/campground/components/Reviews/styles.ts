import { Card } from 'components/lib'
import styled from 'styled-components/macro'

export const ReviewWrap = styled(Card)`
  .title {
    font-size: 1rem;
  }
  .content {
    font-size: 0.875rem;
  }
  .stamp {
    text-align: right;
    span {
      margin-left: 1rem;
    }
  }
`
