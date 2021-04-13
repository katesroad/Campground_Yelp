import styled from 'styled-components'
import { medium, large, xlarge } from 'styles/media-queries'

export const Wrapper = styled.div.attrs(() => ({ className: 'camp-intro' }))`
  ${large} {
    display: flex;
    flex-direction: row;
  }

  .imgs-swiper {
    overflow: hidden;
  }

  .swiper-slide {
    min-height: calc(6.8rem + 10vw);
    width: 100% !important;
    background-size: cover;
    background-position: center;
    ${medium} {
      max-height: 12rem;
    }
    ${large} {
      width: 45%;
      max-height: 16rem;
      margin-right: calc(2rem + 2vw);
    }
  }
`

export const IntroText = styled.div`
  margin-top: 1.25rem;

  .title-box {
    h2 {
      font-size: 1.5rem;
    }
    .rating-stats {
      margin-top: 0.25rem;
      span {
        margin-right: auto;
      }
      strong {
        margin-left: 1rem;
        flex-grow: 2;
      }
    }
  }

  .info-box {
    margin: 1.25rem 0;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.9375rem;
  }

  .label {
    margin-right: 0.5rem;
    text-transform: capitalize;
    &.is-closed {
      color: var(--bs-red);
      font-weight: var(--font-bolder);
    }
  }
`

export const CampOperations = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  button {
    margin-right: 1rem;
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
