import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import { useHistory } from 'react-router'
import { IUser } from 'types'
import client from 'utils/http'

const expiration: number =
  +(process.env.REACT_APP_ACCESS_TOKEN_EXPIRATION as string) || 60 * 60 * 1000

interface IUseAuthOptions {
  redirect?: boolean
  to?: string
}
function useAuthConf(options?: IUseAuthOptions) {
  const client = useQueryClient()
  const history = useHistory()
  return {
    staleTime: +expiration - 60 * 1000,
    cacheTime: +expiration,
    retry: 0,
    onSuccess: (data: IUser | null) => {
      client.setQueryData('user', data)
      try {
        if (options) {
          const { redirect, to } = options
          if (redirect) history.push(to || '/campgrounds')
        } else {
          history.push('/campgrounds')
        }
      } catch (e) {}
    },
  }
}

function getUser(): Promise<IUser | null> {
  return client({ endpoint: 'auth/token' })
    .then((data) => data as IUser)
    .catch(() => null)
}

export function useGetUser(): UseQueryResult<IUser | null> {
  const conf = useAuthConf()
  return useQuery('user', getUser, conf)
}

export type Credentials = { email: string; password: string }
function loginUser(data: Credentials): Promise<IUser | null> {
  return client({ endpoint: 'auth/login', method: 'POST', data }).then(
    (data) => data as IUser
  )
}
export function useLogin(
  options?: IUseAuthOptions
): UseMutationResult<IUser | null> {
  const conf = useAuthConf(options)
  return useMutation('user', (data) => loginUser(data as Credentials), conf)
}

export type RegisterData = {
  email: string
  password: string
  username?: string
}
export function register(data: RegisterData): Promise<IUser | null> {
  if (!data.username || data.username.trim() == '') {
    delete data.username
  }
  return client({ endpoint: 'auth/register', method: 'POST', data }).then(
    (data) => data as IUser
  )
}
export function useRegister(
  options?: IUseAuthOptions
): UseMutationResult<IUser | null> {
  const conf = useAuthConf(options)
  return useMutation('user', (data) => register(data as RegisterData), conf)
}

function logout(): Promise<null> {
  return client({ endpoint: 'auth/logout' }).then(() => null)
}
export function useLogout() {
  const conf = useAuthConf({ redirect: false })
  return useMutation('user', logout, conf)
}
