import * as React from 'react'
import CampList from './components/CampList'
import { Spinner } from 'components/lib'
import { ErrorBoundaryWrap } from 'components/ErrorBoundary'
import SearchCamps from './components/SearchCamps'
import CampsOnMap from './components/CampsOnMap'
import { useGetCampgrounds } from 'hooks/campgrounds.hooks'

export default function CampgroundsScreen() {
  const [search, setSearch] = React.useState<string>('')
  const campsQuery = useGetCampgrounds()
  React.useEffect(() => {
    document.title = 'Campgrounds | YelpCamp'
    document.querySelector('main')?.classList.add('no-margin')
    return () => {
      document.title = 'YelpCamp'
      document.querySelector('main')?.classList.remove('no-margin')
    }
  }, [])
  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        <ErrorBoundaryWrap>
          <CampsOnMap />
        </ErrorBoundaryWrap>
      </React.Suspense>
      <SearchCamps
        keyword={search}
        onSearch={(search) => {
          setSearch(search)
        }}
      />
      <CampList query={campsQuery} />
    </>
  )
}
