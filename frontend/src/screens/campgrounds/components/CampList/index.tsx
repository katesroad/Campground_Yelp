import { Card } from '@material-ui/core'
import { Spinner } from 'components/lib'
import * as React from 'react'
import { UseQueryResult } from 'react-query'
import { ICampgroundItem, IPagedRes } from 'types'
import { Campground } from './Campground'
import { Wrapper } from './styles'

type CampgroundListProps = {
  query: UseQueryResult<IPagedRes<ICampgroundItem>>
}

export { Campground } from './Campground'

export default function Campgrounds({ query }: CampgroundListProps) {
  const { status, data } = query
  if (['idle', 'loading'].includes(status)) return <Spinner />
  if (status === 'error') return <Card>Failed to load campgrounds</Card>
  if (data?.count == 0) {
    return (
      <Card>
        <p>No campgrounds</p>
      </Card>
    )
  }
  return (
    <Wrapper>
      {['loading', 'idle'].includes(status) ? <Spinner /> : null}
      <ul>
        {data?.data?.map((camp) => (
          <li key={camp.id}>
            <Campground {...camp} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
