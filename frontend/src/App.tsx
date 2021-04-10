import { useAuth } from 'context/auth.context'
import { Route } from 'react-router-dom'
import IndexScreen from 'screens'
import CampgroundScreen from 'screens/campground'
import CampgroundsScreen from 'screens/campgrounds'
import UnAuthedRoutes from 'UnAuthedRoutes'

export default function App() {
  const { user } = useAuth()
  return (
    <>
      <Route path="/" exact component={IndexScreen} />
      <Route path="/campgrounds" exact component={CampgroundsScreen} />
      <Route path="/campgrounds/:id" exact component={CampgroundScreen} />
      {user ? null : <UnAuthedRoutes />}
    </>
  )
}
