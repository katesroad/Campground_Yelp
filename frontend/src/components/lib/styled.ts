import styled from 'styled-components'
import { small, medium, xlarge } from 'styles/media-queries'

export const Content = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  ${small} {
    padding-left: 24px;
    padding-right: 24px;
  }
  ${medium} {
    width: 89.5%;
    padding-right: 0;
    padding-left: 0;
    margin-left: auto;
    margin-right: auto;
  }
  ${xlarge} {
    max-width: 68.75rem;
  }
`

export const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.375rem;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  text-transform: capitalize;
  color: var(--bs-white);
  background-color: transparent;
  ${xlarge} {
    padding: 0.35rem 0.5rem;
  }
  &.btn--delete {
    background-color: var(--bs-red);
  }
  &.btn--submit,
  &.btn--confirm,
  &.btn--update,
  &.btn--mark {
    background-color: var(--bs-green);
    svg {
      margin-top: -1px;
    }
  }
`
