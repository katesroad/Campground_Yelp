import { Redirect, Route, Switch } from 'react-router'
import ProfileScreen from 'screens/profile'

const ToProfile = () => <Redirect to="/profile" />

export default function AuthedApp() {
  return (
    <Switch>
      <Route path="/profile" component={ProfileScreen} />
      <Route path="*" component={ToProfile} />
    </Switch>
  )
}
