import { Card } from 'components/lib'
import styled from 'styled-components/macro'

/*----------------------------Styling for review item-----------------------------*/
export const ReviewWrap = styled(Card)`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--bs-white);
  p {
    line-height: 1.65;
    font-size: 0.875rem;
  }
  .title {
    font-size: 1.25rem;
  }
  .stamp {
    margin-top: 1rem;
    display: flex;
    font-size: 0.75rem;
    .date {
      margin-left: 1rem;
      color: rgba(0, 0, 0, 0.65);
    }
  }
  .operation {
    text-align: right;
    button {
      margin-left: 1rem;
      &.btn--update {
        background-color: var(--bs-green);
      }
      &.btn--delete {
        background-color: var(--bs-red);
      }
    }
  }
`

export const ReviewContent = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  align-items: flex-start;
  margin: 1.25rem 0;
  img {
    margin-top: 0.325rem;
    border-radius: 0.375rem;
    max-width: 2.5rem;
  }
  .content {
    margin-left: 1.25rem;
    line-height: 1.65;
  }
`

/*----------------styling for review list---- */
export const Wrapper = styled.div.attrs(() => ({ className: 'camp-reviews' }))`
  .list-title {
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    small {
      font-size: 0.875rem;
      font-weight: var(--font-normal);
    }
  }
`
