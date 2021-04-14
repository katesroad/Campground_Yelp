// eslint-disable-next-line
import styled from 'styled-components/macro'
import * as React from 'react'
import CampList, { Campground } from './components/CampList'
import { useGetCampgrounds } from 'hooks/campgrounds.hooks'
import { Spinner } from 'components/lib'

export default function CampgroundsScreen() {
  const { data, status, error } = useGetCampgrounds()
  React.useEffect(() => {
    document.title = 'Campgrounds | YelpCamp'
    return () => {
      document.title = 'YelpCamp'
    }
  }, [])
  return (
    <CampList camps={data?.data}>
      {['loading', 'idle'].includes(status) ? <Spinner /> : null}
    </CampList>
  )
}
