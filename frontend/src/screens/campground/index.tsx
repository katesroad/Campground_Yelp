import { Content } from 'components/lib'
import * as React from 'react'
import { useParams } from 'react-router'
import Introduction from './components/Introduction'
import Reviews from './components/Reviews'

export default function CampgroundScreen() {
  const { id } = useParams<any>()

  return (
    <Content>
      <Introduction campground={id} />
      <Reviews campground={id} />
    </Content>
  )
}
