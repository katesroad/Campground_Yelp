import { Card } from 'components/lib'
import styled from 'styled-components/macro'
import { medium, large, xlarge } from 'styles/media-queries'

/*----------------------------Styling for review summary-----------------------------*/
export const SummaryWrap = styled.div.attrs(() => ({
  className: 'review-summary',
}))`
  .rating {
    display: flex;
    align-items: center;
    margin-bottom: 0.875rem;
    strong {
      margin-left: 1rem;
    }
  }
  .rating-count {
    margin-bottom: 1rem;
  }
`

export const Bar = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  p {
    max-width: 18.75rem;
    flex-grow: 1;
    height: 1rem;
    margin: 0 0.75rem;
    border-radius: 0.25rem;
    box-shadow: inset 0 0 0 1px #e3e6e6;
    background-color: #f0f2f2;
    overflow: hidden;
    span {
      display: block;
      height: 100%;
      background-color: #ffb400;
    }
  }
  .rate {
    width: 2.125rem;
  }
`

/*----------------------------Styling for review item-----------------------------*/
export const ReviewWrap = styled(Card)`
  padding: calc(1rem + 1vw);
  margin-bottom: 1rem;
  background-color: var(--bs-white);
  p {
    line-height: 1.65;
    font-size: 0.875rem;
  }
  .title {
    font-size: 1rem;
  }
  .operation {
    text-align: right;
    button {
      margin-left: 1rem;
      ${xlarge} {
        padding: 0.25rem 0.5rem;
      }
      &.btn--update {
        background-color: var(--bs-green);
      }
      &.btn--delete {
        background-color: var(--bs-red);
      }
    }
  }
  ${medium} {
    border: none;
    padding: 0;
    margin-bottom: 1.5rem;
  }
`

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.75rem;
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .date {
    font-weight: var(--font-bolder);
    margin-left: 1rem;
    color: rgba(0, 0, 0, 0.65);
  }
  .operation {
    display: none;
    ${medium} {
      display: block;
    }
  }
`

export const ReviewContent = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  align-items: flex-start;
  margin: 1.25rem 0;
  ${medium} {
    margin: 0.5rem 0;
  }
  img {
    margin-top: 0.325rem;
    border-radius: 0.375rem;
    max-width: 2rem;
  }
  strong {
    display: block;
    font-size: 0.75rem;
  }
  .content {
    margin-left: 1.25rem;
    line-height: 1.65;
    ${medium} {
      margin-bottom: 0;
    }
  }
  .operation {
    ${medium} {
      display: none;
    }
  }
`

/*----------------styling for review list---- */
export const Wrapper = styled.div.attrs(() => ({ className: 'camp-reviews' }))`
<<<<<<< HEAD
  .list-title {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    small {
      font-size: 0.875rem;
      font-weight: var(--font-normal);
=======
  margin-top: 2.5rem;
  .list-title {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
  }
`

export const ReviewsWrap = styled.div`
  .review-list {
    margin-top: calc(1.25rem + 2vw);
  }
  .no-reviews {
    padding: 2rem;
    font-weight: var(--font-bolder);
  }
  ${medium} {
    display: flex;
    .review-summary {
      min-width: 14.75rem;
      margin-right: calc(2rem + 4vw);
    }
    .review-list {
      flex-grow: 1;
      margin-top: 0;
    }
  }
  ${large} {
    .review-summary {
      min-width: 18rem;
    }
  }
  ${xlarge} {
    jusiticy-content: space-between;
    .write-review {
      dispaly: block;
>>>>>>> dev
    }
  }
`
