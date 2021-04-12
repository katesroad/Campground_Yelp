import * as React from 'react'
import { Spinner } from 'components/lib'
import Review from './Review'
import { useGetCampReviews } from 'hooks/campgrounds.hooks'
import { summary } from './data'
import { Wrapper } from './styles'
import Summary from './Summary'

type ReviewsProps = {
  campground: string
}
export default function Reviews({ campground }: ReviewsProps) {
  const { status, data, error } = useGetCampReviews(campground)
  let content: React.ReactNode = <p>No reviews for campground</p>

  if (['loading', 'idle'].includes(status)) {
    content = <Spinner />
  }
  if (status === 'error') {
    content = <p>{JSON.stringify(error)}</p>
  }

  if (status === 'success') {
    content = data?.count ? (
      data?.data?.map((review) => <Review {...review} key={review.id} />)
    ) : (
      <p>No reviews for campground</p>
    )
  }

  return (
    <Wrapper>
      <h2 className="list-title">Reviews</h2>
      {status === 'success' ? <Summary {...summary} /> : null}
      <div>{content}</div>
    </Wrapper>
  )
}
