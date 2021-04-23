import styled from 'styled-components'
import { xlarge } from 'styles/media-queries'

export const Wrapper = styled.div`
  max-width: 21.25rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  form {
    padding: 2rem 1rem 4rem 1rem;
  }
  .title {
    padding-bottom: 2rem;
    text-transform: capitalize;
    small {
      font-size: 12px;
      text-transform: none;
      span {
        margin-right: 0.5rem;
      }
    }
  }
  button[type='submit'] {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-left: 0.5rem;
    }
    line-height: 1.5;
    width: 100%;
    text-transform: uppercase;
    background-color: #28a745;
    border-color: #28a745;
  }
  .switch-type {
    margin-top: 1rem;
    a {
      color: var(--bs-blue);
      text-decoration: underline;
    }
  }
  ${xlarge} {
    margin-top: calc(3rem + 1vh);
  }
`
