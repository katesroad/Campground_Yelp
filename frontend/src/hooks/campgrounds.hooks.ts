import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import { ICampgroundItem, IPagedRes, IQueryParams, IReview } from 'types'
import client from 'utils/http'

const conf = {
  staleTime: 30 * 60 * 1000,
  cacheTime: 30 * 60 * 1000,
}

/**
 * Query campground's reviews by pagination
 * @param{string} campId the campground's id
 * @param{IQueryParams} params the pagination query params
 */
export function getCampsReviews(
  campId: string,
  params?: IQueryParams
): Promise<IPagedRes<IReview>> {
  let endpoint = `campgrounds/${campId}/reviews`
  if (params) {
    endpoint += `?offset=${params['offset']}&limit=${params['limit']}`
  }
  return client({ endpoint }).then((res) => res as IPagedRes<IReview>)
}

export function useGetCampReviews(
  campId: string,
  params?: IQueryParams
): UseQueryResult<IPagedRes<IReview>> {
  return useQuery(
    ['reviews', campId, params],
    () => getCampsReviews(campId, params),
    conf
  )
}

// Get campground information by campground's id
export function getCampground(campId: string): Promise<ICampgroundItem> {
  return client({ endpoint: `campgrounds/${campId}` }).then(
    (res) => res as ICampgroundItem
  )
}
export function useGetCampground(
  campId: string
): UseQueryResult<ICampgroundItem> {
  return useQuery(['camp', campId], () => getCampground(campId), conf)
}

// create campground by with given data
export function createCampground(data: any) {
  const camp = new FormData()
  Object.keys(data).map((key) => {
    if (key !== 'images') {
      camp.set(key, data[key])
    } else {
      data['images'].map((file: File) => {
        camp.append('images', file, file.name)
      })
    }
  })

  return client({
    endpoint: 'campgrounds',
    data: camp,
    method: 'POST',
  })
}
export function useCreateCampground(): UseMutationResult<any | null> {
  const queryClient = useQueryClient()
  return useMutation('camps', (data) => createCampground(data), {
    ...conf,
    onSuccess: (data: any) => {
      queryClient.setQueryData(['camp', data.id], data)
      queryClient.refetchQueries(['camps'])
    },
  })
}

// update campground by with given data
export function updateCampground(data: any): Promise<any> {
  const { id, ...update } = data
  return client({
    endpoint: `campgrounds/${id}`,
    method: 'PATCH',
    data: update,
  })
}
export function useUpdateCampground(): UseMutationResult<any | null> {
  const queryClient = useQueryClient()
  return useMutation('camps', (data) => updateCampground(data), {
    ...conf,
    onSuccess: (data: any) => {
      queryClient.setQueryData(['camp', data.id], data)
      queryClient.refetchQueries(['camps'])
    },
  })
}

// delete campground by with given data
export function deleteCampground(id: string): Promise<null> {
  return client({
    endpoint: `campgrounds/${id}`,
    method: 'DELETE',
  }).then(() => null)
}
export function useDeleteCampground(id: string): UseMutationResult<null> {
  const queryClient = useQueryClient()
  return useMutation('camps', () => deleteCampground(id), {
    ...conf,
    onSuccess: () => {
      queryClient.setQueryData(['camp', id], null)
      queryClient.refetchQueries(['camps'])
    },
  })
}

//Get campgrounds with pagination query parameters
export function getCampgrounds(
  params?: IQueryParams
): Promise<IPagedRes<ICampgroundItem>> {
  let endpoint = `campgrounds`
  if (params) {
    endpoint += `?offset=${params['offset']}&limit=${params['limit']}`
  }
  return client({ endpoint }).then((res) => res as IPagedRes<ICampgroundItem>)
}

export function useGetCampgrounds(
  params?: IQueryParams
): UseQueryResult<IPagedRes<ICampgroundItem>> {
  return useQuery('campgrounds', () => getCampgrounds(params), conf)
}
