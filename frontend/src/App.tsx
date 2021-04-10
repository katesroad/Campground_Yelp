import { useAuth } from 'context/auth.context'
import { Route } from 'react-router'
import IndexScreen from 'screens'
import UnAuthedRoutes from 'UnAuthedRoutes'

function App() {
  const { user } = useAuth()
  return (
    <>
      <Route path="/" exact component={IndexScreen} />
      {user ? null : <UnAuthedRoutes />}
    </>
  )
}

export default App
