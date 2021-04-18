import * as React from 'react'
import { matchSorter } from 'match-sorter'
import CampList from './components/CampList'
import { Card, Content, Error, Spinner } from 'components/lib'
import { ErrorBoundaryWrap } from 'components/ErrorBoundary'
import SearchCamps from './components/SearchCamps'
import CampsOnMap from './components/CampsOnMap'
import { useGetCampgrounds } from 'hooks/campgrounds.hooks'
import { SearchWrap } from './components/styled'
import { ICampgroundItem, IPagedRes, MapGeoJsonFeature } from 'types'
import { useQueryClient } from 'react-query'

export default function CampgroundsScreen() {
  const { status } = useGetCampgrounds()
  const queryClient = useQueryClient()
  const [search, setSearch] = React.useState<string>('')
  const [camps, setCamps] = React.useState<ICampgroundItem[]>([])

  React.useEffect(() => {
    const { data } = (queryClient.getQueryData(
      'campgrounds'
    ) as IPagedRes<ICampgroundItem>) || { data: [], count: 0 }
    let camps: ICampgroundItem[] = data || []
    if (search) {
      camps = matchSorter(data, search, { keys: ['title'] })
    }
    setCamps(camps)
  }, [search, status])

  const mapFeatures = React.useMemo(() => {
    const features: MapGeoJsonFeature[] = camps.map(
      ({ geometry, ...properties }) => {
        return { geometry, properties, type: 'Feature' }
      }
    )
    return features
  }, [camps])

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
          <CampsOnMap features={mapFeatures} />
        </ErrorBoundaryWrap>
      </React.Suspense>
      <SearchWrap>
        <h2 className="search-title">
          All campgrounds
          <br />
          {['loading', 'idle'].includes(status) ? (
            <Spinner />
          ) : status === 'success' ? (
            <small>
              <strong>{camps.length}</strong> campgrounds
            </small>
          ) : null}
        </h2>
        <SearchCamps keyword={search} onSearch={setSearch} />
      </SearchWrap>
      <Content>
        {['loading', 'idle'].includes(status) ? <Spinner /> : null}
        {'error' === status ? (
          <Card>
            <Error>Failed to load campgrounds</Error>
          </Card>
        ) : null}
        {status === 'success' ? <CampList camps={camps} /> : null}
      </Content>
    </>
  )
}
