import styled from 'styled-components'
import { medium, large } from 'styles/media-queries'

export const Wrapper = styled.div.attrs(() => ({ className: 'camp-intro' }))`
  ${large} {
    display: flex;
  }
  .imgs-swiper {
    overflow: hidden;
    ${large} {
      width: 60%;
    }
  }

  .swiper-slide {
    min-height: calc(7.8rem + 4vw);
    width: 100% !important;
    background-size: cover;
    background-position: center;

    ${large} {
      max-height: 16rem;
    }
  }

  .rows {
    ${medium} {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  }
`

export const ContentWrap = styled.div``

export const CampTitle = styled.div`
  h2 {
    font-size: calc(1.25rem + 1vw);
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
`

export const IntroText = styled.div`
  margin-top: 1.25rem;
  &.desc {
    ${medium} {
      width: 56.5%;
      padding-bottom: 4rem;
      align-self: flex-end;
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
