import styled from 'styled-components'

export const Wrapper = styled.div`
  .form-file {
    position: relative;
    margin-bottom: 1rem;
    --bs-form-file-height: calc(1.5em + 0.75rem + 2px);
    .label {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1;
      display: flex;
      height: var(--bs-form-file-height);
      border-color: #ced4da;
      border-radius: 0.25rem;
    }
    input {
      position: relative;
      z-index: 2;
      width: 100%;
      height: var(--bs-form-file-height);
      margin: 0;
      opacity: 0;
    }
    .file-text {
      display: block;
      flex-grow: 1;
      padding: 0.375rem 0.75rem;
      overflow: hidden;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: #fff;
      border-color: inherit;
      border-style: solid;
      border-width: 1px;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }
    .file-button {
      display: block;
      flex-shrink: 0;
      padding: 0.375rem 0.75rem;
      margin-left: -1px;
      line-height: 1.5;
      color: #495057;
      background-color: #e9ecef;
      border-color: inherit;
      border-style: solid;
      border-width: 1px;
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
    }
    .error-msg {
      display: block;
      margin-top: 1rem;
    }
  }
`
