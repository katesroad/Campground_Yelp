import * as React from 'react'
import { Spinner, Card } from 'components/lib'
import Review from './Review'
import { useGetCampReviews } from 'hooks/campgrounds.hooks'
import { summary } from './data'
import { Wrapper, ReviewsWrap } from './styles'
import Summary from './Summary'

type ReviewsProps = {
  campground: string
}
export default function Reviews({ campground }: ReviewsProps) {
  const { status, data, error } = useGetCampReviews(campground)
  let content: React.ReactNode = (
    <Card className="no-reviews">
      <p>No reviews.</p>
    </Card>
  )

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
      <Card className="no-reviews">
        <p>No reviews.</p>
      </Card>
    )
  }

  return (
    <Wrapper>
      <h2 className="list-title">Customer Reviews</h2>
      <ReviewsWrap>
        {status === 'success' ? (
          <div>
            <Summary {...summary} />
          </div>
        ) : null}
        <div className="review-list">{content}</div>
      </ReviewsWrap>
    </Wrapper>
  )
}
