// eslint-disable-next-line
import styled from 'styled-components/macro'
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

  const [isLoaded, setIsLoaded] = React.useState<boolean>(false)

  React.useEffect(() => {
    let loaded = 0
    const imgItems: any[] = []
    images?.map(({ url }, index) => {
      imgItems.push(new Image())
      imgItems[index].onload = () => {
        loaded += 1
        if (loaded === images?.length) setIsLoaded(true)
      }
      imgItems[index].src = url
    })
    return () => {
      imgItems.map((item) => {
        item = null
      })
    }
  }, [images])

  if (!images || !isLoaded)
    return (
      <Wrapper>
        <div className="swiper-slide img-placeholder">
          <Spinner />
        </div>
      </Wrapper>
    )

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
      {/* next/prev button */}
      {images?.length >= 2 ? (
        <>
          <button onClick={goPrev} className="btn-prev">
            <FcPrevious />
          </button>
          <button onClick={goNext} className="btn-next">
            <FcNext />
          </button>
        </>
      ) : null}
    </Wrapper>
  )
}

export default ImgSwpper
