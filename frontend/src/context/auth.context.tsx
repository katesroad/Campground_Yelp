// eslint-disable-next-line
import styled from 'styled-components/macro'
import * as React from 'react'
import { useGetUser } from 'hooks/auth.hooks'
import { IUser } from 'types'

type AuthContextType = { user: IUser | null | undefined }

const AuthContext = React.createContext<AuthContextType | null>(null)
AuthContext.displayName = 'AuthContext'

export const AuthProvider: React.FC = (props) => {
  const { data: user, status } = useGetUser()

  const value = React.useMemo((): AuthContextType => ({ user }), [user])

  if (['loading', 'idle'].includes(status)) {
    return (
      <div
        css={`
          position: fixed;
          top: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          background: var(--body-background);
        `}
      >
        <p>Loading...</p>
      </div>
    )
  }

  return <AuthContext.Provider value={value} {...props} />
}

export function useAuth(): AuthContextType {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`Using useAuth outside of <AuthProvider />.`)
  }
  return context as AuthContextType
}
