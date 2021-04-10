import { AppFooter, AppHeader, AppMain } from 'components/Layout'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Switch } from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyle'
import { AuthProvider } from './auth.context'
import { ThemeProvider } from './theme.context'

const client = new QueryClient()
// https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement
const AppProviders: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <QueryClientProvider client={client}>
          <AuthProvider>
            <BrowserRouter>
              <AppHeader></AppHeader>
              <AppMain>
                <Switch>{children}</Switch>
              </AppMain>
              <AppFooter />
            </BrowserRouter>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
export default AppProviders
