import styled from 'styled-components'
import { medium } from 'styles/media-queries'

export const Wrapper = styled.div`
  height: 50vh;
  display: none;
  ${medium} {
    position: relative;
    display: block;
    svg {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      font-size: 4rem;
    }
  }
  .mapboxgl-popup-content {
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 1rem;
    pointer-events: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    background: #fafafa;
    h4 {
      line-height: 1.25;
    }
    img {
      display: block;
      max-width: 10rem;
      margin: 1rem auto;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
      border-radius: 0.25rem;
      text-transform: capitalize;
      color: var(--bs-white);
      background-color: var(--bs-blue);
      font-size: 0.75rem;
      max-width: 6rem;
      margin: 0 auto;
    }
  }
  .mapboxgl-popup-close-button {
    font-size: 1.5rem;
    padding: 0.25rem;
  }
`
