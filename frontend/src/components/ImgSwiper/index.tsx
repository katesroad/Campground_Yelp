import * as React from 'react'
import Swiper from 'react-id-swiper'
import { FcPrevious } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'
import { Wrapper } from './styles'
import { CampgroundImage } from 'types'
import { Spinner } from 'components/lib'

type ImgSwipperProps = {
  images?: CampgroundImage[]
}
const ImgSwpper: React.FC<ImgSwipperProps> = ({ images, ...props }) => {
  const ref = React.useRef<any>(null)

  if (images?.length === 1) return <img src={images[0].url} />
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
  if (!images) return <Spinner />
  return (
    <Wrapper {...props}>
      <Swiper ref={ref} {...params} rebuildOnUpdate>
        {images?.map((img) => (
          <img src={img.url} />
        ))}
      </Swiper>
      <button onClick={goPrev} className="btn-prev">
        <FcPrevious />
      </button>
      <button onClick={goNext} className="btn-next">
        <FcNext />
      </button>
    </Wrapper>
  )
}

export default ImgSwpper
