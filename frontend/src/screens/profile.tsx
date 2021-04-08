import * as React from 'react'
import { useAuth } from 'context/auth.context'
import { useLogout } from 'hooks/auth.hooks'

export default function ProfileScreen() {
  const { user } = useAuth()
  const { status, mutate } = useLogout()
  return (
    <div>
      <div>user:{user?.username || user?.email}</div>
      <button onClick={() => mutate()} disabled={status === 'loading'}>
        {status === 'loading' ? 'signout...' : 'signout'}
      </button>
    </div>
  )
}
