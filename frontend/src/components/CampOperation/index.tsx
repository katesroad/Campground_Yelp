import * as React from 'react'
import { BsBookmark } from 'react-icons/bs'
import WriteReviewModal from 'components/WriteReview'
import { withAuth } from 'components/withAuth'
import { Button } from 'components/lib'

type ReviewButtonProps = {
  id?: string
}
export const ReviewButton: React.FC<ReviewButtonProps> = ({ id }) => {
  const review = { campground: id }
  return (
    <WriteReviewModal review={review} type="create">
      <Button className="btn btn--review">Review</Button>
    </WriteReviewModal>
  )
}

// @todo
export const MarkButton: React.FC<ReviewButtonProps> = (props) => {
  const content = <p>To mark campground, please login in.</p>
  const ele = (
    <Button className="btn btn--mark">
      <pre>mark</pre> <BsBookmark />
    </Button>
  )
  return withAuth(ele, { content })
}

export const Direction: React.FC<{
  query: string
  children?: React.ReactNode
}> = ({ query, children }) => {
  const mapQuery = encodeURIComponent(query)
  return (
    <a
      target="_blank"
      href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
    >
      {children || 'Direction'}
    </a>
  )
}
