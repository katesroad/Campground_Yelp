import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import { IUser } from 'types'
import client from 'utils/http'

const expiration: number =
  +(process.env.REACT_APP_ACCESS_TOKEN_EXPIRATION as string) || 60 * 60 * 1000

const conf = {
  staleTime: +expiration - 60 * 1000,
  cacheTime: +expiration,
  retry: 0,
}

function getUser(): Promise<IUser | null> {
  return client({ endpoint: 'auth/token' })
    .then((data) => data as IUser)
    .catch(() => null)
}

export function useGetUser(): UseQueryResult<IUser | null> {
  return useQuery('user', getUser, conf)
}

export type Credentials = { email: string; password: string }
function loginUser(data: Credentials): Promise<IUser | null> {
  return client({ endpoint: 'auth/login', method: 'POST', data }).then(
    (data) => data as IUser
  )
}
export function useLogin(): UseMutationResult<IUser | null> {
  const queryClient = useQueryClient()
  return useMutation('user', (data) => loginUser(data as Credentials), {
    ...conf,
    onError: () => {
      queryClient.setQueryData('user', null)
    },
  })
}

function logout(): Promise<null> {
  return client({ endpoint: 'auth/logout' }).then(() => null)
}
export function useLogout() {
  const client = useQueryClient()
  return useMutation('user', logout, {
    onError: () => {
      client.refetchQueries('user')
    },
    onSuccess: () => window.location.reload(),
  })
}
