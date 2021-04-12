import { Button } from 'components/lib'
import { useAuth } from 'context/auth.context'
import { useDeleteReview } from 'hooks/reviews.hooks'
import * as React from 'react'
import Rating from '@material-ui/lab/Rating'
import { Author, IReview } from 'types'
import { ReviewWrap, ReviewContent, ReviewRating } from './styles'

type ReviewOperationProps = {
  id: string
  author: Author
}

const ReviewOperation: React.FC<ReviewOperationProps> = ({ id, author }) => {
  const deleteMutation = useDeleteReview({ id })
  const handleDelete = () => {
    deleteMutation.mutate(id)
  }
  const { user } = useAuth()
  return user?.id === author?.id ? (
    <p className="operation">
      <Button className="btn--update">update</Button>
      <Button className="btn--delete" onClick={handleDelete}>
        delete
      </Button>
    </p>
  ) : null
}

const Review: React.FC<IReview> = ({
  id,
  title,
  body,
  rating,
  author,
  created_at,
}) => {
  return (
    <ReviewWrap>
      <h4 className="title">{title}</h4>
      <ReviewRating>
        <p>
          <Rating value={+rating} disabled name={id} />
          <span className="date">
            {new Date(created_at).toLocaleDateString()}
          </span>
        </p>
        <ReviewOperation id={id} author={author} />
      </ReviewRating>
      <ReviewContent>
        <p>
          <img src="https://avatars.githubusercontent.com/u/3837437?s=400&u=41dbd69ae36d8fe8a6f8834d160b495d1b640d7b&v=4" />
          <strong>{author.username || author.email}</strong>
        </p>
        <div className="content">
          <p>{body}</p>
          <ReviewOperation author={author} id={id} />
        </div>
      </ReviewContent>
    </ReviewWrap>
  )
}

export default Review
