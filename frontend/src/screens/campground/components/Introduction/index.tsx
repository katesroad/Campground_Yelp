import * as React from 'react'
import { useGetCampground } from 'hooks/campgrounds.hooks'

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
  return null
}
