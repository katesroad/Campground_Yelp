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
export const ReviewWrap = styled.div`
  padding: calc(1rem + 1vw);
  background-color: var(--bs-white);
  ${medium} {
    border: none;
    padding: 0;
    margin-bottom: 1.5rem;
  }
  .review-title {
    font-size: 1rem;
  }
  .review-date {
    margin-left: 0.75rem;
    font-size: 0.75rem;
  }
  .review-content {
    margin-left: 1rem;
    font-size: 0.875rem;
    .operation {
      margin-top: 1rem;
    }
  }
  .operation {
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 1rem;
    }
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
      display: flex;
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
  margin-top: 2.5rem;
  .list-title {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
  }
`

export const ReviewsWrap = styled.div`
  ${medium} {
    display: flex;
    justify-content: space-between;
  }
  ${xlarge} {
    .write-review {
      dispaly: block;
    }
  }

  .no-reviews {
    padding: 2rem;
    font-weight: var(--font-bolder);
  }

  .review-list {
    margin-top: calc(1.25rem + 2vw);
    ${medium} {
      flex-grow: 1;
      margin-top: 0;
      max-width: 56.5%;
    }
    ${large} {
      max-width: 30.5rem;
    }
  }

  .review-summary {
    ${medium} {
      min-width: 14.75rem;
    }
    ${large} {
      min-width: 18rem;
    }
  }
`
