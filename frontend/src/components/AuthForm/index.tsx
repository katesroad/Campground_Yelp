import * as React from 'react'
import { Formik, Form } from 'formik'
import { initialValues, AuthSchema } from './auth.helper'
import { useAuth } from 'context/auth.context'
import { Wrapper } from './styles'
import { UseMutationResult } from 'react-query'
import { IUser } from 'types'
import { TextField } from 'components/FormField/TextField'
import { Button } from 'components/lib'

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
  type: 'login' | 'register'
}
export default function AuthForm({ type, mutation }: AuthFormProps) {
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
      <img src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" />
      <Formik
        initialValues={initialValues}
        validationSchema={AuthSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          return (
            <Form onFocus={getClearErrorHandler(props)}>
              <h2 className="title">{type}</h2>
              {type === 'register' ? (
                <TextField
                  label="user name"
                  name="username"
                  placeholder="user name"
                />
              ) : null}
              <TextField label="email" name="email" placeholder="email" />
              <TextField
                label="password"
                name="password"
                placeholder="password"
                type="password"
              />
              <AuthError
                errMsg={errMsg}
                isSubmitting={props.isSubmitting}
                onClearMsg={getClearErrorHandler(props)}
              />
              <p>
                <Button type="submit">{type}</Button>
              </p>
            </Form>
          )
        }}
      </Formik>
    </Wrapper>
  )
}
