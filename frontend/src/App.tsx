import { Route } from 'react-router'
import IndexScreen from 'screens'

function App() {
  return (
    <>
      <Route path="/" exact component={IndexScreen} />
    </>
  )
}

export default App
