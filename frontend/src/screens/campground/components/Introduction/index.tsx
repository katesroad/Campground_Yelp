import * as React from 'react'
import { useGetCampground } from 'hooks/campgrounds.hooks'
import Rating from '@material-ui/lab/Rating'
import { Spinner, Error, Button } from 'components/lib'
import { BsBookmark } from 'react-icons/bs'
import WriteReviewModal from 'components/WriteReview'
import { Wrapper, CampOperations, IntroText } from './styles'
import { withAuth } from 'components/withAuth'
import ImgSwiper from 'components/ImgSwiper'

type OperatioButtonProps = {
  id?: string
}
const ReviewButton: React.FC<OperatioButtonProps> = ({ id }) => {
  const review = { campground: id }
  return (
    <WriteReviewModal review={review} type="create">
      <Button className="btn btn--review">Review</Button>
    </WriteReviewModal>
  )
}

const MarkButton: React.FC<OperatioButtonProps> = ({ id }) => {
  const content = <p>To mark campground, please login in.</p>
  const ele = (
    <Button className="btn btn--mark">
      <pre>mark</pre> <BsBookmark />
    </Button>
  )
  return withAuth(ele, { content })
}

type IntroductionProps = {
  campground: string
}
export default function Introduction({ campground }: IntroductionProps) {
  const { status, data: camp, error } = useGetCampground(campground)
  React.useEffect(() => {
    if (camp?.title) document.title = camp?.title + ' | YelpCamp'
    return () => {
      document.title = 'YelpCamp'
    }
  }, [camp])
  if (['loading', 'idle'].includes(status)) {
    return <Spinner />
  }
  if (status === 'error') {
    return (
      <Error>
        <p>{JSON.stringify(error)}</p>
      </Error>
    )
  }
  return (
    <Wrapper>
      <ImgSwiper images={camp?.images} />
      <div className="rows">
        <IntroText>
          <h2>{camp?.title}</h2>
          <div>
            <p className="rating-stats">
              <Rating value={4.5} precision={0.5} name={campground} disabled />{' '}
              <strong>12 reviews</strong>
            </p>
            <p>
              <span>Price:</span> <span>${camp?.price}/night</span>
            </p>
            <p>Location: {camp?.location}</p>
            <p>
              <span>closed</span> <span>9:00 a.m ~16:00p.m</span>
            </p>
          </div>
          <CampOperations>
            <ReviewButton id={camp?.id} />
            <Button>
              <a
                target="_blank"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  camp?.title as string
                )}`}
              >
                Direction
              </a>
            </Button>
            <MarkButton id={camp?.id} />
          </CampOperations>
        </IntroText>
        <IntroText>
          <h4>Introduction</h4>
          <p>{camp?.description}</p>
        </IntroText>
      </div>
    </Wrapper>
  )
}
