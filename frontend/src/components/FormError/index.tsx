import * as React from 'react'
import { Wrapper } from './styles'

type ErrorProps = {
  isSubmitting: boolean
  clearMsg: () => void
  errMsg: string
}
const FormError = ({ isSubmitting, errMsg, clearMsg }: ErrorProps) => {
  React.useEffect(() => {
    if (errMsg) {
      const t1 = setTimeout(() => {
        clearTimeout(t1)
        try {
          clearMsg()
        } catch (e) {}
      }, 15000)
    }
  }, [errMsg, clearMsg])
  if (!isSubmitting) return null
  return (
    <Wrapper className="form-error">
      <p>{errMsg.toString()}</p>
    </Wrapper>
  )
}

export default FormError
