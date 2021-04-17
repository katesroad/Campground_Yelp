import styled from 'styled-components'
import { Form as FormikForm } from 'formik'

export const Form = styled(FormikForm)`
  .search-box {
    position: relative;
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
