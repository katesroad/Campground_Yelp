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

export const ContentWrap = styled.div`
  margin-top: 1.25rem;
  ${medium} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
  }
`

export const CampTitle = styled.div`
  h2 {
    font-size: calc(1.25rem + 1vw);
  }
  .rating-stats {
    display: flex;
    justify-content: space-between;

    margin-top: 0.25rem;
    span {
      margin-right: auto;
    }
    strong {
      margin-left: 1rem;
      flex-grow: 2;
    }
    .operation {
      display: none;
      ${medium} {
        display: flex;
      }
    }
  }

  ${medium} {
    width: 100%;
  }
`

export const IntroText = styled.div`
  margin-top: 1.25rem;
  &.desc {
    ${medium} {
      width: 56.5%;
      align-self: flex-end;
    }
  }

  .info-box {
    margin-bottom: 1.25rem;
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
  .operation {
    ${medium} {
      display: none;
    }
  }
`
