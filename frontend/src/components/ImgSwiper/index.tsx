import * as React from 'react'
import Swiper, { SwiperRefNode } from 'react-id-swiper'
import { FcPrevious } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'
import { Wrapper } from './styles'
import { CampgroundImage } from 'types'
import { Spinner } from 'components/lib'

type ImgSwipperProps = {
  images?: CampgroundImage[]
}
const ImgSwpper: React.FC<ImgSwipperProps> = ({ images, ...props }) => {
  // https://github.com/kidjp85/react-id-swiper/blob/master/src/types.ts#L45
  const ref = React.useRef<SwiperRefNode>(null)

  if (!images) return <Spinner />

  if (images?.length === 1) return <img src={images[0].url} />
  const goNext = () => {
    if (ref?.current?.swiper !== null) {
      try {
        ref?.current?.swiper?.slideNext()
      } catch (e) {}
    }
  }

  const goPrev = () => {
    if (ref?.current?.swiper !== null) {
      try {
        ref?.current?.swiper?.slidePrev()
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
    <Wrapper {...props}>
      <Swiper ref={ref} {...params} rebuildOnUpdate>
        {images?.map((img) => (
          <div
            key={img.public_id}
            css={`
              background-image: url(${img.url});
            `}
          />
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
