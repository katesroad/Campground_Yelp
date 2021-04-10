import React from 'react'
import { Route } from 'react-router-dom'
import LoginScreen from 'screens/login'
import RegisterScreen from 'screens/register'

export default function UnAuthedRoutes() {
  return (
    <>
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />
    </>
  )
}
