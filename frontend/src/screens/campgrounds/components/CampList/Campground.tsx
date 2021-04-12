import { Button } from 'components/lib'
import * as React from 'react'
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
          <p className="camp-desc">{description}</p>
          <p className="camp-location">
            <span>{location}</span>
            <strong>$ {price} / night</strong>
          </p>
        </div>
        <Link to={`/campgrounds/${id}`} className="camp-link">
          <Button>View campground</Button>
        </Link>
      </CampgroundIntro>
    </CampgroundWrap>
  )
}
