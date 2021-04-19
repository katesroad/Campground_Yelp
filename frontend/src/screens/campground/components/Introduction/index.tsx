import * as React from 'react'
import Rating from '@material-ui/lab/Rating'
import { Spinner } from 'components/lib'
import ImgSwiper from 'components/ImgSwiper'
import { Redirect } from 'react-router-dom'
import { useGetCampground } from 'hooks/campgrounds.hooks'
import Campoperatinon from './CampOperation'
import { Wrapper, ContentWrap, CampTitle, IntroText } from './styles'
import { Direction } from 'components/CampOperation'

type IntroductionProps = {
  campground: string
}
export default function Introduction({ campground }: IntroductionProps) {
  const { status, data: camp } = useGetCampground(campground)

  React.useEffect(() => {
    if (camp?.title) document.title = camp?.title + ' | YelpCamp'
    return () => {
      document.title = 'YelpCamp'
    }
  }, [camp])

  if (['loading', 'idle'].includes(status)) {
    return <Spinner />
  }

  if (status === 'error' || !camp) {
    return <Redirect to="/campgrounds" />
  }

  return (
    <Wrapper>
      <ImgSwiper images={camp?.images} />
      <ContentWrap>
        <CampTitle>
          <h2>{camp?.title}</h2>
          <div className="rating-stats">
            <p>
              <Rating
                value={camp.rating / camp.reviewsNum}
                precision={0.5}
                name={campground}
              />
              <strong>
                <small>{camp.reviewsNum} reviews</small>
              </strong>
            </p>
            <Campoperatinon
              location={camp?.location + ',' + camp.title}
              id={camp?.id}
            />
          </div>
        </CampTitle>
        <IntroText>
          <div className="info-box">
            <p>
              <span className="label">Price:</span>
              <span>{camp?.price}$ / night</span>
            </p>
            <p>
              <span className="label">Location:</span>
              <span className="value">
                <Direction query={camp?.location + camp.title}>
                  {camp?.location}
                </Direction>
              </span>
            </p>
            <p>
              <span className="label opening-status is-closed">closed</span>
              <span>9:00 a.m ~16:00p.m</span>
            </p>
          </div>
          <Campoperatinon
            location={camp?.location + ',' + camp.title}
            id={camp?.id}
          />
        </IntroText>
        <IntroText className="desc">
          <p>{camp?.description}</p>
        </IntroText>
      </ContentWrap>
    </Wrapper>
  )
}
