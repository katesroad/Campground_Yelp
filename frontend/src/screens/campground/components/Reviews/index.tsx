import { useGetCampReviews } from 'hooks/campgrounds.hooks'
import { stringify } from 'node:querystring'
import * as React from 'react'

type ReviewsProps = {
  campground: string
}
export default function Reviews({ campground }: ReviewsProps) {
  const { status, data: reviews, error } = useGetCampReviews(campground)
  return <p>{JSON.stringify(reviews)}</p>
}
