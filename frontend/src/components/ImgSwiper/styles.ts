import styled from 'styled-components'
import 'swiper/swiper.scss'

export const Wrapper = styled.div.attrs(() => ({ className: 'imgs-swiper' }))`
  position: relative;
  button {
    position: absolute;
    padding: 0.25rem 0;
    background-color: rgba(0, 0, 0, 0.2);
    top: 50%;
    z-index: 2;
    transform: translate(0, -50%);
    border-radius: 0.25rem;
    &.btn-next {
      right: 1rem;
    }
    &.btn-prev {
      left: 1rem;
    }
    svg {
      width: 3rem;
    }
  }
  .img-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background-color: var(--bs-light);
  }
`
