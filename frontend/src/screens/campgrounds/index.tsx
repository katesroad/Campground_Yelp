// eslint-disable-next-line
import styled from 'styled-components/macro'
import * as React from 'react'
import CampgroundList, { Campground } from './components/CampList'
import { useGetCampgrounds } from 'hooks/campgrounds.hooks'
import { Spinner } from 'components/lib'
import { medium } from 'styles/media-queries'

export default function CampgroundsScreen() {
  const { data, status, error } = useGetCampgrounds()
  React.useEffect(() => {
    document.title = 'Campgrounds | YelpCamp'
    return () => {
      document.title = 'YelpCamp'
    }
  }, [])
  return (
    <CampgroundList camps={data?.data}>
      {['loading', 'idle'].includes(status) ? <Spinner /> : null}
    </CampgroundList>
  )
}
