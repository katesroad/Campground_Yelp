import * as React from 'react'
import { Wrapper } from './styles'

type CampgroundListProps = {
  children: React.ReactNode
}

export { Campground } from './Campground'

export default function CampgroundList({ children }: CampgroundListProps) {
  return (
    <Wrapper>
      <h2 className="title">All Campgrounds</h2>
      <div>{children}</div>
    </Wrapper>
  )
}
