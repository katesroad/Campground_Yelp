import * as React from 'react'
import { ICampgroundItem } from 'types'
import { Campground } from './Campground'
import { Wrapper } from './styles'

type CampgroundListProps = {
  children: React.ReactNode
  camps?: ICampgroundItem[]
}

export { Campground } from './Campground'

export default function Campgrounds({ children, camps }: CampgroundListProps) {
  return (
    <Wrapper>
      <h2 className="title">Campgrounds</h2>
      <div>{children}</div>
      <ul>
        {camps?.map((camp) => (
          <li key={camp.id}>
            <Campground {...camp} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
