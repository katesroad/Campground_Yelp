import IndexScreen from 'screens/home'
import LoginScreen from 'screens/login'
import { useAuth } from 'context/auth.context'
import AppProviders from './context'
import RegisterScreen from 'screens/register'
import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'

const CampgroundsScreen = React.lazy(() => import('./screens/campgrounds'))
const CampgroundScreen = React.lazy(() => import('./screens/campground'))
const CreateScreen = React.lazy(() => import('./screens/create'))

function UnAuthedRoutes() {
  const { user } = useAuth()
  if (user) {
    return (
      <Route path="/*" component={() => <Redirect to={'/campgrounds'} />} />
    )
  }
  return (
    <Switch>
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />
      <Route path="*" component={() => <Redirect to="/campgrounds" />} />
    </Switch>
  )
}

export default function App() {
  return (
    <AppProviders>
      <Switch>
        <Route path="/" exact component={IndexScreen} />
        <Route path="/campgrounds" exact component={CampgroundsScreen} />
        <Route path="/campgrounds/create" exact component={CreateScreen} />
        <Route path="/campgrounds/:id" exact component={CampgroundScreen} />
        <UnAuthedRoutes />
      </Switch>
    </AppProviders>
  )
}
