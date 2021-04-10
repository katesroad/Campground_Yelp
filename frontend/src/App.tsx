import { useAuth } from 'context/auth.context'
import { Route } from 'react-router-dom'
import IndexScreen from 'screens'
import UnAuthedRoutes from 'UnAuthedRoutes'

export default function App() {
  const { user } = useAuth()
  return (
    <>
      <Route path="/" exact component={IndexScreen} />
      {user ? null : <UnAuthedRoutes />}
    </>
  )
}
