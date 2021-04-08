import AuthedApp from 'App.Authed'
import UnAuthedApp from 'App.UnAuthed'
import { useAuth } from 'context/auth.context'

function App() {
  const { user } = useAuth()
  return user ? <AuthedApp /> : <UnAuthedApp />
}

export default App
