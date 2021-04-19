import CampForm from 'components/CampForm'
import * as React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from 'context/auth.context'
import { Wrapper } from './components/styled'

export default function CreateCampScreen() {
  const { user } = useAuth()

  React.useEffect(() => {
    document.title = 'Create Campground | Yelp'
    return () => {
      document.title = 'Yelpcamp'
    }
  }, [])

  if (!user) {
    return <Redirect to="/campgrounds" />
  }

  return (
    <Wrapper>
      <h2 className="title">Create Campground</h2>
      <CampForm type="add" />
      <Link to="/campgrounds" className="view-all">
        <strong>All campgrounds</strong>
      </Link>
    </Wrapper>
  )
}
