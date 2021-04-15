import { Button } from 'components/lib'
import * as React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { CampgroundIntro, CampgroundWrap } from './styles'
import { ICampgroundItem } from 'types'
import ImageSwiper from 'components/ImgSwiper'
import { Direction } from 'components/CampOperation'

export const Campground: React.FC<ICampgroundItem> = ({
  id,
  title,
  description,
  price,
  location,
  images,
}) => {
  const query = ''
  return (
    <CampgroundWrap>
      <ImageSwiper images={images} />
      <CampgroundIntro>
        <div>
          <h4 className="camp-title">{title}</h4>
          <div className="camp-features">
            <p>
              <Direction query={title}>
                <span className="label">
                  <IoLocationOutline />
                </span>
                <span className="value"> {location}</span>
              </Direction>
            </p>
            <p>
              <span className="label">Price:</span>
              <span className="value">{price}$ / night</span>
            </p>
          </div>
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
