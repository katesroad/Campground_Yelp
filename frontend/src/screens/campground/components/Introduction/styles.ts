import styled from 'styled-components'
import { medium, large, xlarge } from 'styles/media-queries'

export const Wrapper = styled.div.attrs(() => ({ className: 'camp-intro' }))`
  .imgs-swiper {
    overflow: hidden;
  }
  .swiper-slide {
    min-height: calc(6.8rem + 10vw);
    width: 100% !important;
    background-size: cover;
    background-position: center;
  }
  ${medium} {
    .swipe-slide {
      max-height: 12rem;
    }
  }
  ${large} {
    display: flex;
    flex-direction: row;
    .imgs-swiper {
      width: 45%;
      max-height: 16rem;
      margin-right: calc(2rem + 2vw);
    }
  }
`

export const IntroText = styled.div`
  &:nth-child(2n) {
    margin-top: 2rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
    &.rating-stats {
      span {
        margin-right: auto;
      }
      strong {
        margin-left: 1rem;
        font-size: 80%;
        flex-grow: 2;
      }
    }
  }
  button,
  span {
    margin-right: 1rem;
  }
`

export const CampOperations = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  button {
    background-color: var(--bs-blue);
    &.btn--review {
      background-color: var(--bs-secondary);
    }
    &.btn--mark {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: var(--bs-green);
      svg {
        margin-left: 0.25rem;
      }
    }
  }
`
