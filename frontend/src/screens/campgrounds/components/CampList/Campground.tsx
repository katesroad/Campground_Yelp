import { Button } from 'components/lib'
import * as React from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import { FcPrevious } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'
import { CampgroundIntro, CampgroundWrap, SwipperWrap } from './styles'
import { CampgroundImage, ICampgroundItem } from 'types'

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
        <h4 className="camp-title">{title}</h4>
        <p className="camp-desc">{description}</p>
        <p className="camp-location">
          <span>{location}</span>
          <strong>$ {price}</strong>
        </p>
        <Link to={`/campgrounds/${id}`} className="camp-link">
          <Button>View {title}</Button>
        </Link>
      </CampgroundIntro>
    </CampgroundWrap>
  )
}

type ImageSwiperProps = {
  images: CampgroundImage[]
}
const ImageSwiper: React.FC<ImageSwiperProps> = ({ images }) => {
  const ref = React.useRef<any>(null)

  if (images.length === 1) return <img src={images[0].url} />
  const goNext = () => {
    if (ref.current !== null && ref.current?.swiper !== null) {
      try {
        ref.current?.swiper.slideNext()
      } catch (e) {}
    }
  }

  const goPrev = () => {
    if (ref.current !== null && ref.current?.swiper !== null) {
      try {
        ref.current?.swiper.slidePrev()
      } catch (e) {}
    }
  }
  const params = {
    autoHeight: true,
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
  }
  return (
    <SwipperWrap>
      <Swiper ref={ref} {...params} rebuildOnUpdate>
        {images.map((img) => (
          <img src={img.url} />
        ))}
      </Swiper>
      <button onClick={goPrev} className="btn-prev">
        <FcPrevious />
      </button>
      <button onClick={goNext} className="btn-next">
        <FcNext />
      </button>
    </SwipperWrap>
  )
}
