import styled from 'styled-components'
import { medium, large } from 'styles/media-queries'

export const Wrapper = styled.div.attrs(() => ({ className: 'camp-intro' }))`
  ${large} {
    display: flex;
  }
  .imgs-swiper {
    overflow: hidden;
    flex-grow: 1;
    ${large} {
      margin-right: 4rem;
    }
  }

  .swiper-slide {
    min-height: calc(7.8rem + 4vw);
    width: 100% !important;
    background-size: cover;
    background-position: center;

    ${large} {
      height: 14rem;
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
  ${large} {
    width: 30.5rem;
    display: block;
  }
`

export const CampTitle = styled.div`
  h2 {
    font-size: calc(1.25rem + 1vw);
    ${large} {
      font-size: 2rem;
    }
  }
  .rating-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 0.25rem;
    p {
      display: flex;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
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
  ${large} {
    width: 100%;
  }
  &.desc {
    ${medium} {
      width: 56.5%;
      align-self: flex-end;
    }
    ${large} {
      width: 100%;
    }
  }

  .info-box {
    margin-bottom: 1.25rem;
    ${large} {
      margin-bottom: 0;
    }
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
