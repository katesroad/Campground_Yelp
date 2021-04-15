import * as React from 'react'
import CampList from './components/CampList'
import { useGetCampgrounds } from 'hooks/campgrounds.hooks'
import CampsOnMap from './components/CampsOnMap'

export default function CampgroundsScreen() {
  const campsQuery = useGetCampgrounds()
  React.useEffect(() => {
    document.title = 'Campgrounds | YelpCamp'
    return () => {
      document.title = 'YelpCamp'
    }
  }, [])
  return (
    <>
      <CampsOnMap query={campsQuery} />
      <CampList query={campsQuery} />
    </>
  )
}
