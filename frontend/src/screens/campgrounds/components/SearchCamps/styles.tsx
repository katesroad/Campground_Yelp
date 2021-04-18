import styled from 'styled-components'

export const Form = styled('form')`
  .search-box {
    position: relative;
    input {
      display: block;
      width: 100%;
      min-height: calc(1.5em + 0.75rem + 2px);
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      appearance: none;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #8bbafe;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
      }
    }
    .search-icon {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translate(0, -50%);
    }
    .label {
      display: none;
    }
  }
`
