// eslint-disable-next-line
import * as React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValues, AuthSchema } from './auth.helper'
import { useAuth } from 'context/auth.context'
import { Wrapper, FormControl } from './styles'
import { UseMutationResult } from 'react-query'
import { IUser } from 'types'

type AuthErrorProps = {
  isSubmitting: boolean
  onClearMsg: () => void
  errMsg: string
}
const AuthError = ({ isSubmitting, errMsg, onClearMsg }: AuthErrorProps) => {
  React.useEffect(() => {
    if (errMsg) {
      const t1 = setTimeout(() => {
        clearTimeout(t1)
        onClearMsg()
      }, 5000)
    }
  }, [errMsg, onClearMsg])
  if (!isSubmitting) return null
  return <p>{errMsg.toString()}</p>
}

type AuthFormProps = {
  mutation: UseMutationResult<IUser | null>
}
export default function AuthForm({ mutation }: AuthFormProps) {
  const [errMsg, setErrMsg] = React.useState('')
  const { setUser } = useAuth()
  const { status, data: user, mutateAsync: doLogin } = mutation
  const handleSubmit = (values: unknown) => {
    doLogin(values).catch(() => {
      setErrMsg('Login failed')
    })
  }
  // eslint-disable-next-line
  const getClearErrorHandler = (props: any) => () => {
    props.setSubmitting(false)
    setErrMsg('')
  }
  React.useEffect(() => {
    if (status === 'success' && user) setUser(user)
  }, [status, user, setUser])
  return (
    <Wrapper>
      <h2 className="title">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={AuthSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          return (
            <Form onFocus={getClearErrorHandler(props)}>
              <FormControl>
                <span>Email</span>
                <Field name="email" placeholder="email" />
                <small className="validation-msg">
                  <ErrorMessage name="email" />
                </small>
              </FormControl>
              <FormControl>
                <span>Password</span>
                <Field name="password" placeholder="password" type="password" />
                <small className="validation-msg">
                  <ErrorMessage name="password" />
                </small>
              </FormControl>
              <AuthError
                errMsg={errMsg}
                isSubmitting={props.isSubmitting}
                onClearMsg={getClearErrorHandler(props)}
              />
              <FormControl>
                <button type="submit">
                  {props.isSubmitting ? 'Logining' : 'Login'}
                </button>
              </FormControl>
            </Form>
          )
        }}
      </Formik>
    </Wrapper>
  )
}
