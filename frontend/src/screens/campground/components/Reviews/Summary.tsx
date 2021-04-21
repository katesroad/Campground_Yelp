import * as React from 'react'
import Rating from '@material-ui/lab/Rating'
import { SummaryWrap, Bar } from './styles'

type ReviewBarProps = {
  count: number
  total: number
  star: number
}
const ReviewBar = ({ count, total, star }: ReviewBarProps) => {
  const rate = total ? ((count / total) * 100).toFixed(2) + '%' : 0
  return (
    <Bar>
      <span className="star">{star} star</span>
      <p>
        <span style={{ width: rate }}></span>
      </p>
      <span className="rate">{rate}</span>
    </Bar>
  )
}

type SummaryProps = {
  total: number
  stats: { star: number; count: number }[]
  rating: number // the average rating value
}
const Summary: React.FC<SummaryProps> = ({ total, stats, rating }) => {
  return (
    <SummaryWrap>
      <p className="rating">
        <Rating name="avgRating" value={+rating.toFixed(2)} precision={0.5} />
        <strong>{rating} out 5</strong>
      </p>
      <p className="rating-count">{total} reviews</p>
      <div className="rating-bars">
        {stats.map(({ count, star }) => (
          <ReviewBar total={total} star={star} count={count} key={star} />
        ))}
      </div>
    </SummaryWrap>
  )
}

export default Summary
