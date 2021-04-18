import { Card } from 'components/lib'
import * as React from 'react'
import { ICampgroundItem } from 'types'
import { Campground } from './Campground'
import { Wrapper } from './styles'

type CampgroundListProps = {
  camps: ICampgroundItem[]
}

export default function Campgrounds({ camps }: CampgroundListProps) {
  return (
    <Wrapper>
      {camps.length ? (
        <ul>
          {camps.map((camp) => (
            <li key={camp.id}>
              <Campground {...camp} />
            </li>
          ))}
        </ul>
      ) : (
        <Card>
          <p>No campgrounds were found</p>
        </Card>
      )}
    </Wrapper>
  )
}
