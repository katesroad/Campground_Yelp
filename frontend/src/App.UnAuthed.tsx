import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginScreen from 'screens/login'

const ToLogin: React.FC = () => <Redirect to="/login" />

export default function UnAuthedApp() {
  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <Route path="*" component={ToLogin} />
    </Switch>
  )
}
