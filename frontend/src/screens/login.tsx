import AuthForm from 'components/AuthForm'
import { useLogin } from 'hooks/auth.hooks'
import * as React from 'react'

export default function LoginScreen() {
  React.useEffect(() => {
    document.title = 'Login | YelpCamp'
    return () => {
      document.title = 'YelpCamp'
    }
  }, [])
  const mutation = useLogin()
  return <AuthForm mutation={mutation} type="login" />
}
