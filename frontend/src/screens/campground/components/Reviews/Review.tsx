import * as React from 'react'
import { ReviewWrap } from './styles'

type ReviewProps = {
  title: string
  author: string
  createdAt: string
  body: string
  ratting: number
}

const Review = ({ title, body, ratting, author, createdAt }: ReviewProps) => (
  <ReviewWrap>
    <h4 className="title">{title}</h4>
    <span className="ratting">{ratting}</span>
    <p className="content">{body}</p>
    <p className="stamp">
      <span>{author}</span>{' '}
      <span>{new Date(createdAt).toLocaleDateString()}</span>
    </p>
  </ReviewWrap>
)

export default Review
