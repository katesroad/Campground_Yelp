import { Button } from 'components/lib'
import * as React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CampgroundIntro, CampgroundWrap } from './styles'
import { ICampgroundItem } from 'types'
import ImageSwiper from 'components/ImgSwiper'

export const Campground: React.FC<ICampgroundItem> = ({
  id,
  title,
  description,
  price,
  location,
  images,
}) => {
  return (
    <CampgroundWrap>
      <ImageSwiper images={images} />
      <CampgroundIntro>
        <div>
          <h4 className="camp-title">{title}</h4>
          <p className="camp-location">
            <span>{location}</span>
            <span>{price}$ / night</span>
          </p>
          <p className="camp-desc">{description}</p>
        </div>
        <Link to={`/campgrounds/${id}`} className="camp-link">
          <Button>
            Read <BsArrowRight />
          </Button>
        </Link>
      </CampgroundIntro>
    </CampgroundWrap>
  )
}
