// eslint-disable-next-line
import styled from 'styled-components/macro'
import CampForm from 'components/CampForm'
import { Content } from 'components/lib'
import * as React from 'react'
import { large, medium } from 'styles/media-queries'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from 'context/auth.context'

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
    <Content
      css={`
        .title {
          margin-bottom: calc(1.5rem + 1vw);
          font-size: calc(1.5rem + 1vw);
          ${medium} {
            margin-bottom: calc(1.85rem + 1vw);
            font-size: calc(1.85rem + 1vw);
          }
          ${large} {
            margin-bottom: 2.5rem;
            font-size: 2.5rem;
          }
        }
        .view-all {
          display: block;
          margin-top: 1.5rem;
          color: var(--bs-blue);
          text-decoration: underline;
        }
      `}
    >
      <h2 className="title">Create Campground</h2>
      <CampForm type="add" />
      <Link to="/campgrounds" className="view-all">
        <strong>All campgrounds</strong>
      </Link>
    </Content>
  )
}
