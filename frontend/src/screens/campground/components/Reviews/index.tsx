import * as React from 'react'
import { Spinner, Card } from 'components/lib'
import Review from './Review'
import { useGetCampReviews } from 'hooks/campgrounds.hooks'
import { Wrapper, ReviewsWrap } from './styles'
import Summary from './Summary'

type ReviewsProps = {
  campground: string
}
export default function Reviews({ campground }: ReviewsProps) {
  const { status, data, error } = useGetCampReviews(campground)

  const summary = React.useMemo(() => {
    let totalRating = 0
    const stats: { star: number; count: number }[] = [
      { star: 1, count: 0 },
      { star: 2, count: 0 },
      { star: 3, count: 0 },
      { star: 4, count: 0 },
      { star: 5, count: 0 },
    ]
    if (data?.count) {
      data.data.map(({ rating }) => {
        totalRating += +rating
        const star = Math.round(rating)
        stats[star - 1].count
          ? (stats[star - 1].count += 1)
          : (stats[star - 1].count = 1)
      })
    }
    const rating = totalRating / (data?.count ?? 1)
    return {
      rating: +rating.toFixed(2) || 0,
      total: data?.count ?? 0,
      stats: stats.reverse(),
    }
  }, [data])

  const noReviews = (
    <Card className="no-reviews">
      <p>No reviews.</p>
    </Card>
  )
  let content: React.ReactNode = noReviews

  if (['loading', 'idle'].includes(status)) {
    content = <Spinner />
  }
  if (status === 'error') {
    content = <p>{JSON.stringify(error)}</p>
  }

  if (status === 'success') {
    content = data?.count
      ? data?.data?.map((review) => {
          const reviewData = { ...review, campground }
          return <Review {...reviewData} key={review.id} />
        })
      : noReviews
  }

  return (
    <Wrapper>
      <h2 className="list-title">Customer Reviews</h2>
      <ReviewsWrap>
        {status === 'success' ? <Summary {...summary} /> : null}
        <div className="review-list">{content}</div>
      </ReviewsWrap>
    </Wrapper>
  )
}
