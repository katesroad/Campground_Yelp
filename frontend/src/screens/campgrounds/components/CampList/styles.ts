import { Card, Content } from 'components/lib'
import styled from 'styled-components'
import { medium, xlarge, large } from 'styles/media-queries'

/*--------------------------styling for campgroound item------------------- */
export const CampgroundWrap = styled(Card).attrs(() => ({
  className: 'campground-item',
}))`
  overflow: hidden;
  ${medium} {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
  }
  .swiper-slide {
    height: calc(6.8rem + 10vw);
    max-height: 12rem;
    width: 100% !important;
    background-size: cover;
    background-position: center;
  }

  .imgs-swiper {
    ${medium} {
      width: 50%;
      max-width: 40rem;
    }
  }
  ${large} {
    width: 64%;
  }
`

export const CampgroundIntro = styled.div`
  padding: calc(1rem + 1vw) 1rem;
  p {
    line-height: 1.5;
  }
  .camp-title {
    font-size: 1.254rem;
  }
  .camp-features {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.75rem 0 1rem 0;
    font-size: 0.875rem;
    color: #343a40;
    .label {
      display: flex;
      align-items: center;
      margin-right: 0.25rem;
      max-width: 50%;
    }
    .value {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      flex-grow: 1;
      max-width: 80%;
    }
    p,
    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      justify-content: flex-start;
      color: #343a40;
    }
    a:hover {
      text-decoration: underline;
      color: var(--bs-blue);
    }
  }
  .camp-link {
    display: block;
    margin-top: 1rem;
    button {
      background-color: var(--bs-blue);
    }
    svg {
      margin-left: 0.5rem;
    }
  }
  ${medium} {
    padding: 1rem 2rem;
    width: 60%;
  }
`

/*--------------------------styling for campgroound list------------------- */
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
    margin-bottom: calc(1rem + 1vw);
  }
`
