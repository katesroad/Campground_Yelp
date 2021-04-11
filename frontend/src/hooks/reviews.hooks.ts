import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import client from 'utils/http'

type ReviewOpertion = 'DELETE' | 'CREATE' | 'UPDATE'

function useGetConf(operation: ReviewOpertion, data?: any) {
  const queryClient = useQueryClient()
  return {
    staleTime: 30 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    onSuccess: (res: any) => {
      // refresh the campground reviews
      const review = operation === 'DELETE' ? data : res
      queryClient.refetchQueries(['reviews', review.camground])
    },
  }
}

export function createReview(data: any): Promise<unknown> {
  return client({ method: 'POST', data, endpoint: '/reviews' })
}
export function useCreateReview(data: any): UseMutationResult<unknown> {
  const conf = useGetConf('CREATE')
  return useMutation(['reviews', data.id], (data) => createReview(data), conf)
}

export function deleteReview(data: any): Promise<unknown> {
  return client({ method: 'DELETE', data, endpoint: '/reviews' })
}
export function useDeleteReview(data: any): UseMutationResult<unknown> {
  const conf = useGetConf('DELETE', data)
  return useMutation(['reviews', data.id], (data) => deleteReview(data), conf)
}

export function updateReview(data: any): Promise<unknown> {
  const { id, ...update } = data
  return client({
    method: 'PATCH',
    endpoint: `/reviews/${id}`,
    data: update,
  })
}
export function useUpdateReview(data: any): UseMutationResult<unknown> {
  const conf = useGetConf('DELETE', data)
  return useMutation(['reviews', data.id], () => deleteReview(data), conf)
}
