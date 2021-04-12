import { Card, Content } from 'components/lib'
import styled from 'styled-components'
import { medium, xlarge } from 'styles/media-queries'

export const CampgroundWrap = styled(Card).attrs(() => ({
  className: 'campground-item',
}))`
  overflow: hidden;
  .swiper-slide {
    min-height: calc(6.8rem + 10vw);
    max-height: 12rem;
    width: 100% !important;
    background-size: cover;
    background-position: center;
  }
  ${medium} {
    display: flex;
    flex-direction: row;
    .imgs-swiper {
      width: 50%;
      max-width: 40rem;
    }
  }
`

export const CampgroundIntro = styled.div`
  padding: calc(1rem + 1vw) 1rem;
  .camp-title {
    font-size: 1.254rem;
    margin-bottom: 1rem;
  }
  .camp-desc {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  .camp-location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.7);
  }
  .camp-link {
    display: block;
    margin-top: calc(1rem + 1vw);
    text-align: center;
    button {
      padding: 0.75rem;
      background-color: var(--bs-blue);
    }
  }
  ${medium} {
    padding: 2rem;
  }
`

export const Wrapper = styled(Content)`
  .title {
    padding-bottom: calc(1rem + 1vw);
    font-size: calc(1.5rem + 1vw);
    ${medium} {
      padding-bottom: 2rem;
    }
    ${xlarge} {
      font-size: 2.5rem;
      padding-bottom: 2.5rem;
    }
  }
  .campground-item {
    margin-bottom: 2rem;
  }
`
