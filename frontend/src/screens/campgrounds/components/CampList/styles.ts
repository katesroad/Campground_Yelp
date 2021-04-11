import { Card, Content } from 'components/lib'
import styled from 'styled-components'
import { medium, xlarge } from 'styles/media-queries'

export const CampgroundWrap = styled(Card).attrs(() => ({
  className: 'campground-item',
}))`
  display: flex;
  flex-direction: column;
  .icon-img {
    width: 100%;
    height: auto;
  }
`

export const CampgroundIntro = styled.div`
  padding: 2rem 1rem;

  ${medium} {
    padding: 2rem;
    button {
      margin-top: 2rem;
    }
  }
  .camp-desc {
    margin: 1rem 0;
    line-height: 1.5;
  }
  .camp-location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.75);
  }
  .camp-link {
    display: block;
    margin-top: 2rem;
    text-align: center;
    button {
      padding: 0.75rem;
      background-color: var(--bs-blue);
    }
  }
`

export const Wrapper = styled(Content)`
  .title {
    padding-bottom: calc(1rem + 1vw);
    font-size: calc(2rem + 1vw);
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
