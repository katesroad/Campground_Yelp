import { Button, Spinner } from 'components/lib'
import { useAuth } from 'context/auth.context'
import { useDeleteReview } from 'hooks/reviews.hooks'
import * as React from 'react'
import Rating from '@material-ui/lab/Rating'
import { IReview } from 'types'
import WriteReviewModal from 'components/WriteReview'
import { ReviewWrap, ReviewContent, ReviewRating } from './styles'

const ReviewOperation: React.FC<IReview> = (props) => {
  const { rating, id, author, body, title, campground } = props
  const deleteMutation = useDeleteReview(campground)
  const handleDelete = () => {
    deleteMutation.mutate(id)
  }
  const review = { id, rating: +rating, title, body, campground }
  const { user } = useAuth()
  return user?.id === author?.id ? (
    <p className="operation">
      <WriteReviewModal review={review} type="update">
        <Button className="btn btn--update">update</Button>
      </WriteReviewModal>
      <Button className="btn--delete" onClick={handleDelete}>
        delete {deleteMutation.status === 'loading' ? <Spinner /> : null}
      </Button>
    </p>
  ) : null
}

const Review: React.FC<IReview> = ({ ...review }) => {
  return (
    <ReviewWrap>
      <h4 className="review-title">{review.title}</h4>
      <ReviewRating>
        <p>
          <Rating value={+review.rating} disabled name={review.id} />
          <span className="review-date">
            {new Date(review.created_at).toLocaleDateString()}
          </span>
        </p>
        <ReviewOperation {...review} />
      </ReviewRating>
      <ReviewContent>
        <div className="author">
          <img src="https://avatars.githubusercontent.com/u/3837437?s=400&u=41dbd69ae36d8fe8a6f8834d160b495d1b640d7b&v=4" />
          <strong>{review.author.username || review.author.email}</strong>
        </div>
        <div className="content">
          <p>{review.body}</p>
          <ReviewOperation {...review} />
        </div>
      </ReviewContent>
    </ReviewWrap>
  )
}

export default Review
