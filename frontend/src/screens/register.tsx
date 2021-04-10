import AuthForm from 'components/AuthForm'
import { useRegister } from 'hooks/auth.hooks'
import * as React from 'react'

export default function RegisterScreen() {
  React.useEffect(() => {
    document.title = 'Register | YelpCamp'
    return () => {
      document.title = 'YelpCamp'
    }
  }, [])
  const mutation = useRegister()
  return <AuthForm mutation={mutation} type="register" />
}
