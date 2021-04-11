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
    <CampgroundList>
      {['idle', 'loading'].includes(status) ? (
        <Spinner />
      ) : status === 'error' ? (
        <div>
          <p>{JSON.stringify(error)}</p>
        </div>
      ) : data?.count ? (
        <div
          css={`
            ${medium} {
              padding-bottom: 2rem;
              width: 100%;
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
              grid-auto-rows: minmax(380px, auto);
              gap: 2.5rem;
            }
          `}
        >
          {data?.data.map((camp) => (
            <Campground {...camp} />
          ))}
        </div>
      ) : (
        <p>No Data</p>
      )}
    </CampgroundList>
  )
}
