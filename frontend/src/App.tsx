import { useAuth } from 'context/auth.context'
import { Redirect, Route, Switch } from 'react-router'
import AppProviders from './context'
import IndexScreen from 'screens'
import CampgroundScreen from 'screens/campground'
import CampgroundsScreen from 'screens/campgrounds'
import LoginScreen from 'screens/login'
import RegisterScreen from 'screens/register'
import CreateCampScreen from 'screens/create'
import * as React from 'react'

function UnAuthedRoutes() {
  const { user } = useAuth()
  if (user) {
    return <Route path="/*" component={() => <Redirect to="/" />} />
  }
  return (
    <Switch>
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />
      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  )
}

export default function App() {
  return (
    <AppProviders>
      <Route path="/" exact component={IndexScreen} />
      <Route path="/campgrounds" exact component={CampgroundsScreen} />
      <Route path="/campgrounds/create" exact component={CreateCampScreen} />
      <Route path="/campgrounds/:id" exact component={CampgroundScreen} />
      <UnAuthedRoutes />
    </AppProviders>
  )
}
