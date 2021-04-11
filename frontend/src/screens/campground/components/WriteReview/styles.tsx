import styled from 'styled-components'

export const Wrapper = styled.div`
  .title {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
  }
  button.btn--submit {
    background-color: var(--bs-green);
  }
  .ratting {
    margin-bottom: 1rem;
    p {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .label {
      margin-right: 0.5rem;
    }
    .error-msg {
      display: block;
      margin-top: 0.5rem;
      color: var(--bs-red);
      &:empty {
        display: none;
      }
    }
  }
`
