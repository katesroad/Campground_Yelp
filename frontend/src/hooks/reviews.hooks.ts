import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { IReview } from 'types'
import client from 'utils/http'

type ReviewOpertion = 'DELETE' | 'CREATE' | 'UPDATE'

function useGetConf(operation: ReviewOpertion, data?: any) {
  const queryClient = useQueryClient()
  return {
    staleTime: 30 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    onSuccess: (res: any) => {
      if (operation === 'CREATE') {
        queryClient.invalidateQueries(['reviews', res.campground])
      }
    },
  }
}

export function createReview(data: any): Promise<IReview> {
  return client({ method: 'POST', data, endpoint: 'reviews' }).then(
    (res) => res as IReview
  )
}
export function useCreateReview(): UseMutationResult<IReview> {
  const conf = useGetConf('CREATE')
  return useMutation(['reviews'], (data) => createReview(data), conf)
}

export function deleteReview(id: string): Promise<unknown> {
  return client({ method: 'DELETE', endpoint: `reviews/${id}` })
}
export function useDeleteReview(data: any): UseMutationResult<unknown> {
  const conf = useGetConf('DELETE', data)
  return useMutation(
    ['reviews', data.campground],
    (id: any) => deleteReview(id),
    conf
  )
}

export function updateReview(data: any): Promise<IReview> {
  const { id, ...update } = data
  return client({
    method: 'PATCH',
    endpoint: `reviews/${id}`,
    data: update,
  }).then((res) => res as IReview)
}
export function useUpdateReview(data: any): UseMutationResult<IReview> {
  const conf = useGetConf('UPDATE', data)
  return useMutation(
    ['reviews', data.campground],
    (data) => updateReview(data),
    conf
  )
}
