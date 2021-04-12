import styled from 'styled-components'

export const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    .title-content {
      text-transform: capitalize;
    }
  }
  button {
    &.btn--submit {
      background-color: var(--bs-green);
    }
    &.btn--close {
      background-color: transparent;
    }
  }
  .rating {
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
