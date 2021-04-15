import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { IReview } from 'types'
import client from 'utils/http'

type ReviewOpertion = 'DELETE' | 'CREATE' | 'UPDATE'

/**
 * Get the configuration for review hooks
 * @param{ReviewOperation} the operation type
 * @param{string} the campground of the review
 */
function useGetConf(operation: ReviewOpertion, reviewowner?: string) {
  const queryClient = useQueryClient()
  return {
    staleTime: 30 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    onSuccess: (res: any) => {
      const campId = operation === 'CREATE' ? res.campground : reviewowner
      queryClient.invalidateQueries(['reviews', campId])
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

export function useDeleteReview(
  reviewowner: string
): UseMutationResult<unknown> {
  const conf = useGetConf('DELETE', reviewowner)
  return useMutation(
    ['reviews', reviewowner],
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
export function useUpdateReview(
  reviewowner: string
): UseMutationResult<IReview> {
  const conf = useGetConf('UPDATE', reviewowner)
  return useMutation(
    ['reviews', reviewowner],
    (data) => updateReview(data),
    conf
  )
}
