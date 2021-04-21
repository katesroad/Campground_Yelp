import { AppFooter, AppHeader, AppMain } from 'components/Layout'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyle'
import { AuthProvider } from './auth.context'
import { ErrorBoundaryWrap } from 'components/ErrorBoundary'
import { Spinner } from 'components/lib'

const client = new QueryClient()
// https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement
const AppProviders: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={client}>
        <AuthProvider>
          <BrowserRouter>
            <AppHeader></AppHeader>
            <AppMain>
              <React.Suspense fallback={<Spinner />}>
                <ErrorBoundaryWrap>{children}</ErrorBoundaryWrap>
              </React.Suspense>
            </AppMain>
            <AppFooter />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}
export default AppProviders
