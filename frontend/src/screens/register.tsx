import AuthForm from 'components/AuthForm'
import { useLogin } from 'hooks/auth.hooks';
import * as React from 'react'

export default function RegisterScreen() {
  React.useEffect(() => {
    document.title = 'Login'
  }, [])
  const mutation = useLogin()
  return <AuthForm mutation={mutation} type="register" />;
}