// eslint-disable-next-line
import styled from 'styled-components/macro'
import * as React from 'react'
import CampList from './components/CampList'
import { useGetCampgrounds } from 'hooks/campgrounds.hooks'

export default function CampgroundsScreen() {
  const campsQuery = useGetCampgrounds()
  React.useEffect(() => {
    document.title = 'Campgrounds | YelpCamp'
    return () => {
      document.title = 'YelpCamp'
    }
  }, [])
  return <CampList query={campsQuery} />
}
