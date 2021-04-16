import { useAuth } from 'context/auth.context'
import { Redirect, Route, Switch } from 'react-router'
import AppProviders from './context'
import IndexScreen from 'screens'
import LoginScreen from 'screens/login'
import RegisterScreen from 'screens/register'
import * as React from 'react'
import { Spinner } from 'components/lib'
import { ErrorBoundaryWrap } from 'components/ErrorBoundary'

const CampgroundsScreen = React.lazy(() => import('./screens/campgrounds'))
const CampgroundScreen = React.lazy(() => import('./screens/campground'))
const CreateScreen = React.lazy(() => import('./screens/create'))

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
      <React.Suspense fallback={<Spinner />}>
        <ErrorBoundaryWrap>
          <Route path="/" exact component={IndexScreen} />
          <Switch>
            <Route path="/campgrounds" exact component={CampgroundsScreen} />
            <Route path="/campgrounds/create" exact component={CreateScreen} />
            <Route path="/campgrounds/:id" exact component={CampgroundScreen} />
          </Switch>
        </ErrorBoundaryWrap>
      </React.Suspense>
      <UnAuthedRoutes />
    </AppProviders>
  )
}
