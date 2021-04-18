import * as React from 'react'
import { Link } from 'react-router-dom'
import { Intro, Wrapper } from './components/styled'

export default function IndexScreen() {
  return (
    <Wrapper>
      <Intro>
        <h1>YelpCamp</h1>
        <p>
          Welcome to YelpCamp! <br />
          Jump right in and explore our many campgrounds. <br />
          Feel free to share some of your own and comment on others!
        </p>
        <Link to="/campgrounds">view all campground</Link>
      </Intro>
    </Wrapper>
  )
}
