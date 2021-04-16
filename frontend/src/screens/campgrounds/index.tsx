import * as React from 'react'
import CampList from './components/CampList'
import { useGetCampgrounds } from 'hooks/campgrounds.hooks'
import CampsOnMap from './components/CampsOnMap'
import { Spinner } from 'components/lib'
import { ErrorBoundaryWrap } from 'components/ErrorBoundary'

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
      <React.Suspense fallback={<Spinner />}>
        <ErrorBoundaryWrap>
          <CampsOnMap />
        </ErrorBoundaryWrap>
      </React.Suspense>
      <CampList query={campsQuery} />
    </>
  )
}
