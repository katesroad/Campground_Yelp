import * as React from 'react'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'
import FormError from 'components/FormError'
import { initialValues, AuthSchema } from './auth.helper'
import { Wrapper } from './styles'
import { UseMutationResult } from 'react-query'
import { IUser } from 'types'
import { TextField } from 'components/FormField/TextField'
import { Button } from 'components/lib'

type AuthFormProps = {
  mutation: UseMutationResult<IUser | null>
  type: 'login' | 'register'
  showPicture?: boolean
}
export default function AuthForm({
  type,
  mutation,
  showPicture = true,
}: AuthFormProps) {
  const [errMsg, setErrMsg] = React.useState('')
  const { mutateAsync: doLogin } = mutation
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
  return (
    <Wrapper className={showPicture ? ' auth-form has-picture' : 'auth-form'}>
      {showPicture ? (
        <img src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" />
      ) : null}
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
              <FormError
                errMsg={errMsg}
                isSubmitting={props.isSubmitting}
                clearMsg={getClearErrorHandler(props)}
              />
              <p>
                <Button type="submit" className="btn--submit">
                  {type}
                </Button>
              </p>
              {showPicture ? (
                <p className="switch-type">
                  {type === 'login' ? (
                    <>
                      Don't have an account?&nbsp;
                      <Link to="/register">Register</Link>
                    </>
                  ) : (
                    <>
                      Already have an account?&nbsp;
                      <Link to="/login">Login</Link>
                    </>
                  )}
                </p>
              ) : null}
            </Form>
          )
        }}
      </Formik>
    </Wrapper>
  )
}
