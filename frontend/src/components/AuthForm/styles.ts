import styled from 'styled-components'

export const Wrapper = styled.div.attrs(() => ({ className: 'auth-form' }))`
  max-width: 26.25rem;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #eee;
  .title {
    padding-bottom: 2rem;
    text-align: center;
  }
`

export const FormControl = styled.label.attrs(() => ({
  className: 'form-control',
}))`
  display: block;
  margin-bottom: 1rem;
  span {
    margin-right: 1rem;
    &:after {
      content: ':';
    }
  }
  input {
    padding: 0.375rem 1rem;
    border: 1px solid #eee;
    border-radius: 0.375rem;
    transition: border 0.25s ease;
    &:focus {
      border-color: blue;
    }
  }
  small {
    display: block;
    margin-top: 0.5rem;
    color: red;
  }
  button[type='submit'] {
    background-color: #fff;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    border-radius: 0.375rem;
    margin-left: auto;
    margin-right: auto;
  }
`
