import styled from 'styled-components'

export const OperationWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  button {
    margin-right: 1rem;
    background-color: var(--bs-blue);
    &.btn--review {
      background-color: var(--bs-secondary);
    }
    &.btn--mark {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: var(--bs-green);
      svg {
        margin-left: 0.25rem;
      }
    }
  }
`
